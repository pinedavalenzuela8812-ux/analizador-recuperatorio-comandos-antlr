import fs from "fs";
import antlr4 from "antlr4";

import ComandosLexer from "./generated/ComandosLexer.js";
import ComandosParser from "./generated/ComandosParser.js";

class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }

    syntaxError(recognizer, offendingSymbol, line, column, msg) {
        this.errors.push(`Línea ${line}, columna ${column}: ${msg}`);
    }
}
function obtenerNombreToken(lexer, tokenType) {
    if (tokenType === antlr4.Token.EOF) {
        return "EOF";
    }

    const symbolicNames = lexer.constructor.symbolicNames || [];
    const literalNames = lexer.constructor.literalNames || [];

    const symbolicName = symbolicNames[tokenType];
    const literalName = literalNames[tokenType];

    return symbolicName || literalName || `TOKEN_${tokenType}`;
}
function mostrarTablaTokens(input) {
    const inputStream = new antlr4.InputStream(input);
    const lexer = new ComandosLexer(inputStream);

    const tokens = lexer.getAllTokens();

    console.log("\nTABLA DE LEXEMAS Y TOKENS");
    console.log("-------------------------");
    console.log("LEXEMA\t\tTOKEN");

    for (const token of tokens) {
        const nombreToken = obtenerNombreToken(lexer, token.type);
        console.log(`${token.text}\t\t${nombreToken}`);
    }
}

function limpiarValor(valor) {
    if (valor.startsWith('"') && valor.endsWith('"')) {
        return valor.slice(1, -1);
    }

    return valor;
}

function traducirAJavaScript(tree, parser) {
    const comandos = [];

    const comandosContext = tree.comando();

    for (const comandoCtx of comandosContext) {
        const nombreComando = comandoCtx.nombreComando().getText();

        const argumentos = [];
        const opciones = [];

        for (const argCtx of comandoCtx.argumento()) {
            const textoArg = argCtx.getText();

            if (textoArg.startsWith("@")) {
                const valor = textoArg.substring(1);
                argumentos.push(`"${limpiarValor(valor)}"`);
            }

            if (textoArg.startsWith("--")) {
                const sinGuiones = textoArg.substring(2);

                if (sinGuiones.includes("=")) {
                    const partes = sinGuiones.split("=");
                    const nombre = partes[0];
                    const valor = limpiarValor(partes[1]);
                    opciones.push(`${nombre}: "${valor}"`);
                } else {
                    const partes = sinGuiones.split(/(?=[A-Z])| /);
                    opciones.push(`opcion: "${sinGuiones}"`);
                }
            }
        }

        const argsTexto = `[${argumentos.join(", ")}]`;
        const opcionesTexto = `{ ${opciones.join(", ")} }`;

        comandos.push(`ejecutarComando("${nombreComando}", ${argsTexto}, ${opcionesTexto});`);
    }

    return comandos.join("\n");
}

function ejecutarComando(nombreComando, argumentos, opciones) {
    if (nombreComando === "saludar") {
        const nombre = argumentos[0] || "usuario";

        if (opciones.modo === "formal") {
            console.log(`Buenos días, ${nombre}.`);
        } else {
            console.log(`Hola ${nombre}`);
        }
    } else {
        console.log("Comando ejecutado:", nombreComando);
        console.log("Argumentos:", argumentos);
        console.log("Opciones:", opciones);
    }
}

function ejecutarCodigoTraducido(codigoTraducido) {
    eval(codigoTraducido);
}

function main() {
    let input;

    try {
        input = fs.readFileSync("input.txt", "utf8");
    } catch (error) {
        console.error("No se pudo leer el archivo input.txt");
        return;
    }

    console.log("CÓDIGO FUENTE");
    console.log("-------------");
    console.log(input);

    mostrarTablaTokens(input);

    const chars = new antlr4.InputStream(input);
    const lexer = new ComandosLexer(chars);

    const lexerErrorListener = new CustomErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);

    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ComandosParser(tokens);

    const parserErrorListener = new CustomErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(parserErrorListener);

    const tree = parser.programa();

    const errores = [
        ...lexerErrorListener.errors,
        ...parserErrorListener.errors
    ];

    if (errores.length > 0) {
        console.log("\nERRORES ENCONTRADOS");
        console.log("-------------------");

        for (const error of errores) {
            console.log(error);
        }

        return;
    }

    console.log("\nANÁLISIS SINTÁCTICO");
    console.log("-------------------");
    console.log("Entrada válida.");

    console.log("\nÁRBOL DE DERIVACIÓN");
    console.log("-------------------");
    console.log(tree.toStringTree(parser.ruleNames));

    const codigoTraducido = traducirAJavaScript(tree, parser);

    console.log("\nTRADUCCIÓN A JAVASCRIPT");
    console.log("-----------------------");
    console.log(codigoTraducido);

    console.log("\nEJECUCIÓN");
    console.log("---------");
    ejecutarCodigoTraducido(codigoTraducido);
}

main();