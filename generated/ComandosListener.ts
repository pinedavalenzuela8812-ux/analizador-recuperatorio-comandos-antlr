// Generated from Comandos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramaContext } from "./ComandosParser";
import { ComandoContext } from "./ComandosParser";
import { PrefijoComandoContext } from "./ComandosParser";
import { NombreComandoContext } from "./ComandosParser";
import { ArgumentoContext } from "./ComandosParser";
import { ArgumentoPosicionalContext } from "./ComandosParser";
import { ArgumentoOpcionalContext } from "./ComandosParser";
import { NombreArgumentoContext } from "./ComandosParser";
import { ValorArgumentoContext } from "./ComandosParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ComandosParser`.
 */
export interface ComandosListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ComandosParser.programa`.
	 * @param ctx the parse tree
	 */
	enterPrograma?: (ctx: ProgramaContext) => void;
	/**
	 * Exit a parse tree produced by `ComandosParser.programa`.
	 * @param ctx the parse tree
	 */
	exitPrograma?: (ctx: ProgramaContext) => void;

	/**
	 * Enter a parse tree produced by `ComandosParser.comando`.
	 * @param ctx the parse tree
	 */
	enterComando?: (ctx: ComandoContext) => void;
	/**
	 * Exit a parse tree produced by `ComandosParser.comando`.
	 * @param ctx the parse tree
	 */
	exitComando?: (ctx: ComandoContext) => void;

	/**
	 * Enter a parse tree produced by `ComandosParser.prefijoComando`.
	 * @param ctx the parse tree
	 */
	enterPrefijoComando?: (ctx: PrefijoComandoContext) => void;
	/**
	 * Exit a parse tree produced by `ComandosParser.prefijoComando`.
	 * @param ctx the parse tree
	 */
	exitPrefijoComando?: (ctx: PrefijoComandoContext) => void;

	/**
	 * Enter a parse tree produced by `ComandosParser.nombreComando`.
	 * @param ctx the parse tree
	 */
	enterNombreComando?: (ctx: NombreComandoContext) => void;
	/**
	 * Exit a parse tree produced by `ComandosParser.nombreComando`.
	 * @param ctx the parse tree
	 */
	exitNombreComando?: (ctx: NombreComandoContext) => void;

	/**
	 * Enter a parse tree produced by `ComandosParser.argumento`.
	 * @param ctx the parse tree
	 */
	enterArgumento?: (ctx: ArgumentoContext) => void;
	/**
	 * Exit a parse tree produced by `ComandosParser.argumento`.
	 * @param ctx the parse tree
	 */
	exitArgumento?: (ctx: ArgumentoContext) => void;

	/**
	 * Enter a parse tree produced by `ComandosParser.argumentoPosicional`.
	 * @param ctx the parse tree
	 */
	enterArgumentoPosicional?: (ctx: ArgumentoPosicionalContext) => void;
	/**
	 * Exit a parse tree produced by `ComandosParser.argumentoPosicional`.
	 * @param ctx the parse tree
	 */
	exitArgumentoPosicional?: (ctx: ArgumentoPosicionalContext) => void;

	/**
	 * Enter a parse tree produced by `ComandosParser.argumentoOpcional`.
	 * @param ctx the parse tree
	 */
	enterArgumentoOpcional?: (ctx: ArgumentoOpcionalContext) => void;
	/**
	 * Exit a parse tree produced by `ComandosParser.argumentoOpcional`.
	 * @param ctx the parse tree
	 */
	exitArgumentoOpcional?: (ctx: ArgumentoOpcionalContext) => void;

	/**
	 * Enter a parse tree produced by `ComandosParser.nombreArgumento`.
	 * @param ctx the parse tree
	 */
	enterNombreArgumento?: (ctx: NombreArgumentoContext) => void;
	/**
	 * Exit a parse tree produced by `ComandosParser.nombreArgumento`.
	 * @param ctx the parse tree
	 */
	exitNombreArgumento?: (ctx: NombreArgumentoContext) => void;

	/**
	 * Enter a parse tree produced by `ComandosParser.valorArgumento`.
	 * @param ctx the parse tree
	 */
	enterValorArgumento?: (ctx: ValorArgumentoContext) => void;
	/**
	 * Exit a parse tree produced by `ComandosParser.valorArgumento`.
	 * @param ctx the parse tree
	 */
	exitValorArgumento?: (ctx: ValorArgumentoContext) => void;
}

