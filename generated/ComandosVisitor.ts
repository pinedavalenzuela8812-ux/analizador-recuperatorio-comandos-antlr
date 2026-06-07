// Generated from Comandos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ComandosParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ComandosVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ComandosParser.programa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrograma?: (ctx: ProgramaContext) => Result;

	/**
	 * Visit a parse tree produced by `ComandosParser.comando`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComando?: (ctx: ComandoContext) => Result;

	/**
	 * Visit a parse tree produced by `ComandosParser.prefijoComando`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrefijoComando?: (ctx: PrefijoComandoContext) => Result;

	/**
	 * Visit a parse tree produced by `ComandosParser.nombreComando`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNombreComando?: (ctx: NombreComandoContext) => Result;

	/**
	 * Visit a parse tree produced by `ComandosParser.argumento`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumento?: (ctx: ArgumentoContext) => Result;

	/**
	 * Visit a parse tree produced by `ComandosParser.argumentoPosicional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentoPosicional?: (ctx: ArgumentoPosicionalContext) => Result;

	/**
	 * Visit a parse tree produced by `ComandosParser.argumentoOpcional`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentoOpcional?: (ctx: ArgumentoOpcionalContext) => Result;

	/**
	 * Visit a parse tree produced by `ComandosParser.nombreArgumento`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNombreArgumento?: (ctx: NombreArgumentoContext) => Result;

	/**
	 * Visit a parse tree produced by `ComandosParser.valorArgumento`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValorArgumento?: (ctx: ValorArgumentoContext) => Result;
}

