// Generated from Comandos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ComandosListener } from "./ComandosListener";
import { ComandosVisitor } from "./ComandosVisitor";


export class ComandosParser extends Parser {
	public static readonly EXCLAMACION = 1;
	public static readonly AMPERSAND = 2;
	public static readonly ARROBA = 3;
	public static readonly GUION_GUION = 4;
	public static readonly IGUAL = 5;
	public static readonly TEXTO = 6;
	public static readonly NUMERO = 7;
	public static readonly PALABRA = 8;
	public static readonly LETRA = 9;
	public static readonly WS = 10;
	public static readonly RULE_programa = 0;
	public static readonly RULE_comando = 1;
	public static readonly RULE_prefijoComando = 2;
	public static readonly RULE_nombreComando = 3;
	public static readonly RULE_argumento = 4;
	public static readonly RULE_argumentoPosicional = 5;
	public static readonly RULE_argumentoOpcional = 6;
	public static readonly RULE_nombreArgumento = 7;
	public static readonly RULE_valorArgumento = 8;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"programa", "comando", "prefijoComando", "nombreComando", "argumento", 
		"argumentoPosicional", "argumentoOpcional", "nombreArgumento", "valorArgumento",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'!'", "'&'", "'@'", "'--'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EXCLAMACION", "AMPERSAND", "ARROBA", "GUION_GUION", "IGUAL", 
		"TEXTO", "NUMERO", "PALABRA", "LETRA", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ComandosParser._LITERAL_NAMES, ComandosParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ComandosParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Comandos.g4"; }

	// @Override
	public get ruleNames(): string[] { return ComandosParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ComandosParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ComandosParser._ATN, this);
	}
	// @RuleVersion(0)
	public programa(): ProgramaContext {
		let _localctx: ProgramaContext = new ProgramaContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ComandosParser.RULE_programa);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 19;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 18;
				this.comando();
				}
				}
				this.state = 21;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ComandosParser.EXCLAMACION || _la === ComandosParser.AMPERSAND);
			this.state = 23;
			this.match(ComandosParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comando(): ComandoContext {
		let _localctx: ComandoContext = new ComandoContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ComandosParser.RULE_comando);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this.prefijoComando();
			this.state = 26;
			this.nombreComando();
			this.state = 30;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ComandosParser.ARROBA || _la === ComandosParser.GUION_GUION) {
				{
				{
				this.state = 27;
				this.argumento();
				}
				}
				this.state = 32;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public prefijoComando(): PrefijoComandoContext {
		let _localctx: PrefijoComandoContext = new PrefijoComandoContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ComandosParser.RULE_prefijoComando);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 33;
			_la = this._input.LA(1);
			if (!(_la === ComandosParser.EXCLAMACION || _la === ComandosParser.AMPERSAND)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nombreComando(): NombreComandoContext {
		let _localctx: NombreComandoContext = new NombreComandoContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ComandosParser.RULE_nombreComando);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(ComandosParser.PALABRA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumento(): ArgumentoContext {
		let _localctx: ArgumentoContext = new ArgumentoContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ComandosParser.RULE_argumento);
		try {
			this.state = 39;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ComandosParser.ARROBA:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 37;
				this.argumentoPosicional();
				}
				break;
			case ComandosParser.GUION_GUION:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 38;
				this.argumentoOpcional();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentoPosicional(): ArgumentoPosicionalContext {
		let _localctx: ArgumentoPosicionalContext = new ArgumentoPosicionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ComandosParser.RULE_argumentoPosicional);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 41;
			this.match(ComandosParser.ARROBA);
			this.state = 42;
			this.valorArgumento();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argumentoOpcional(): ArgumentoOpcionalContext {
		let _localctx: ArgumentoOpcionalContext = new ArgumentoOpcionalContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ComandosParser.RULE_argumentoOpcional);
		try {
			this.state = 52;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 44;
				this.match(ComandosParser.GUION_GUION);
				this.state = 45;
				this.nombreArgumento();
				this.state = 46;
				this.match(ComandosParser.IGUAL);
				this.state = 47;
				this.valorArgumento();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.match(ComandosParser.GUION_GUION);
				this.state = 50;
				this.match(ComandosParser.LETRA);
				this.state = 51;
				this.valorArgumento();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nombreArgumento(): NombreArgumentoContext {
		let _localctx: NombreArgumentoContext = new NombreArgumentoContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ComandosParser.RULE_nombreArgumento);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 54;
			this.match(ComandosParser.PALABRA);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valorArgumento(): ValorArgumentoContext {
		let _localctx: ValorArgumentoContext = new ValorArgumentoContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ComandosParser.RULE_valorArgumento);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 56;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ComandosParser.TEXTO) | (1 << ComandosParser.NUMERO) | (1 << ComandosParser.PALABRA))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f=\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x06\x02\x16\n\x02\r\x02\x0E" +
		"\x02\x17\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\x1F\n\x03\f\x03" +
		"\x0E\x03\"\v\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x05\x06" +
		"*\n\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x05\b7\n\b\x03\t\x03\t\x03\n\x03\n\x03\n\x02\x02\x02\v\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x02\x04\x03" +
		"\x02\x03\x04\x03\x02\b\n\x027\x02\x15\x03\x02\x02\x02\x04\x1B\x03\x02" +
		"\x02\x02\x06#\x03\x02\x02\x02\b%\x03\x02\x02\x02\n)\x03\x02\x02\x02\f" +
		"+\x03\x02\x02\x02\x0E6\x03\x02\x02\x02\x108\x03\x02\x02\x02\x12:\x03\x02" +
		"\x02\x02\x14\x16\x05\x04\x03\x02\x15\x14\x03\x02\x02\x02\x16\x17\x03\x02" +
		"\x02\x02\x17\x15\x03\x02\x02\x02\x17\x18\x03\x02\x02\x02\x18\x19\x03\x02" +
		"\x02\x02\x19\x1A\x07\x02\x02\x03\x1A\x03\x03\x02\x02\x02\x1B\x1C\x05\x06" +
		"\x04\x02\x1C \x05\b\x05\x02\x1D\x1F\x05\n\x06\x02\x1E\x1D\x03\x02\x02" +
		"\x02\x1F\"\x03\x02\x02\x02 \x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x05" +
		"\x03\x02\x02\x02\" \x03\x02\x02\x02#$\t\x02\x02\x02$\x07\x03\x02\x02\x02" +
		"%&\x07\n\x02\x02&\t\x03\x02\x02\x02\'*\x05\f\x07\x02(*\x05\x0E\b\x02)" +
		"\'\x03\x02\x02\x02)(\x03\x02\x02\x02*\v\x03\x02\x02\x02+,\x07\x05\x02" +
		"\x02,-\x05\x12\n\x02-\r\x03\x02\x02\x02./\x07\x06\x02\x02/0\x05\x10\t" +
		"\x0201\x07\x07\x02\x0212\x05\x12\n\x0227\x03\x02\x02\x0234\x07\x06\x02" +
		"\x0245\x07\v\x02\x0257\x05\x12\n\x026.\x03\x02\x02\x0263\x03\x02\x02\x02" +
		"7\x0F\x03\x02\x02\x0289\x07\n\x02\x029\x11\x03\x02\x02\x02:;\t\x03\x02" +
		"\x02;\x13\x03\x02\x02\x02\x06\x17 )6";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ComandosParser.__ATN) {
			ComandosParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ComandosParser._serializedATN));
		}

		return ComandosParser.__ATN;
	}

}

export class ProgramaContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ComandosParser.EOF, 0); }
	public comando(): ComandoContext[];
	public comando(i: number): ComandoContext;
	public comando(i?: number): ComandoContext | ComandoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComandoContext);
		} else {
			return this.getRuleContext(i, ComandoContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComandosParser.RULE_programa; }
	// @Override
	public enterRule(listener: ComandosListener): void {
		if (listener.enterPrograma) {
			listener.enterPrograma(this);
		}
	}
	// @Override
	public exitRule(listener: ComandosListener): void {
		if (listener.exitPrograma) {
			listener.exitPrograma(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComandosVisitor<Result>): Result {
		if (visitor.visitPrograma) {
			return visitor.visitPrograma(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComandoContext extends ParserRuleContext {
	public prefijoComando(): PrefijoComandoContext {
		return this.getRuleContext(0, PrefijoComandoContext);
	}
	public nombreComando(): NombreComandoContext {
		return this.getRuleContext(0, NombreComandoContext);
	}
	public argumento(): ArgumentoContext[];
	public argumento(i: number): ArgumentoContext;
	public argumento(i?: number): ArgumentoContext | ArgumentoContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgumentoContext);
		} else {
			return this.getRuleContext(i, ArgumentoContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComandosParser.RULE_comando; }
	// @Override
	public enterRule(listener: ComandosListener): void {
		if (listener.enterComando) {
			listener.enterComando(this);
		}
	}
	// @Override
	public exitRule(listener: ComandosListener): void {
		if (listener.exitComando) {
			listener.exitComando(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComandosVisitor<Result>): Result {
		if (visitor.visitComando) {
			return visitor.visitComando(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrefijoComandoContext extends ParserRuleContext {
	public EXCLAMACION(): TerminalNode | undefined { return this.tryGetToken(ComandosParser.EXCLAMACION, 0); }
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(ComandosParser.AMPERSAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComandosParser.RULE_prefijoComando; }
	// @Override
	public enterRule(listener: ComandosListener): void {
		if (listener.enterPrefijoComando) {
			listener.enterPrefijoComando(this);
		}
	}
	// @Override
	public exitRule(listener: ComandosListener): void {
		if (listener.exitPrefijoComando) {
			listener.exitPrefijoComando(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComandosVisitor<Result>): Result {
		if (visitor.visitPrefijoComando) {
			return visitor.visitPrefijoComando(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NombreComandoContext extends ParserRuleContext {
	public PALABRA(): TerminalNode { return this.getToken(ComandosParser.PALABRA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComandosParser.RULE_nombreComando; }
	// @Override
	public enterRule(listener: ComandosListener): void {
		if (listener.enterNombreComando) {
			listener.enterNombreComando(this);
		}
	}
	// @Override
	public exitRule(listener: ComandosListener): void {
		if (listener.exitNombreComando) {
			listener.exitNombreComando(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComandosVisitor<Result>): Result {
		if (visitor.visitNombreComando) {
			return visitor.visitNombreComando(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentoContext extends ParserRuleContext {
	public argumentoPosicional(): ArgumentoPosicionalContext | undefined {
		return this.tryGetRuleContext(0, ArgumentoPosicionalContext);
	}
	public argumentoOpcional(): ArgumentoOpcionalContext | undefined {
		return this.tryGetRuleContext(0, ArgumentoOpcionalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComandosParser.RULE_argumento; }
	// @Override
	public enterRule(listener: ComandosListener): void {
		if (listener.enterArgumento) {
			listener.enterArgumento(this);
		}
	}
	// @Override
	public exitRule(listener: ComandosListener): void {
		if (listener.exitArgumento) {
			listener.exitArgumento(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComandosVisitor<Result>): Result {
		if (visitor.visitArgumento) {
			return visitor.visitArgumento(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentoPosicionalContext extends ParserRuleContext {
	public ARROBA(): TerminalNode { return this.getToken(ComandosParser.ARROBA, 0); }
	public valorArgumento(): ValorArgumentoContext {
		return this.getRuleContext(0, ValorArgumentoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComandosParser.RULE_argumentoPosicional; }
	// @Override
	public enterRule(listener: ComandosListener): void {
		if (listener.enterArgumentoPosicional) {
			listener.enterArgumentoPosicional(this);
		}
	}
	// @Override
	public exitRule(listener: ComandosListener): void {
		if (listener.exitArgumentoPosicional) {
			listener.exitArgumentoPosicional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComandosVisitor<Result>): Result {
		if (visitor.visitArgumentoPosicional) {
			return visitor.visitArgumentoPosicional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgumentoOpcionalContext extends ParserRuleContext {
	public GUION_GUION(): TerminalNode { return this.getToken(ComandosParser.GUION_GUION, 0); }
	public nombreArgumento(): NombreArgumentoContext | undefined {
		return this.tryGetRuleContext(0, NombreArgumentoContext);
	}
	public IGUAL(): TerminalNode | undefined { return this.tryGetToken(ComandosParser.IGUAL, 0); }
	public valorArgumento(): ValorArgumentoContext {
		return this.getRuleContext(0, ValorArgumentoContext);
	}
	public LETRA(): TerminalNode | undefined { return this.tryGetToken(ComandosParser.LETRA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComandosParser.RULE_argumentoOpcional; }
	// @Override
	public enterRule(listener: ComandosListener): void {
		if (listener.enterArgumentoOpcional) {
			listener.enterArgumentoOpcional(this);
		}
	}
	// @Override
	public exitRule(listener: ComandosListener): void {
		if (listener.exitArgumentoOpcional) {
			listener.exitArgumentoOpcional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComandosVisitor<Result>): Result {
		if (visitor.visitArgumentoOpcional) {
			return visitor.visitArgumentoOpcional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NombreArgumentoContext extends ParserRuleContext {
	public PALABRA(): TerminalNode { return this.getToken(ComandosParser.PALABRA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComandosParser.RULE_nombreArgumento; }
	// @Override
	public enterRule(listener: ComandosListener): void {
		if (listener.enterNombreArgumento) {
			listener.enterNombreArgumento(this);
		}
	}
	// @Override
	public exitRule(listener: ComandosListener): void {
		if (listener.exitNombreArgumento) {
			listener.exitNombreArgumento(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComandosVisitor<Result>): Result {
		if (visitor.visitNombreArgumento) {
			return visitor.visitNombreArgumento(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValorArgumentoContext extends ParserRuleContext {
	public TEXTO(): TerminalNode | undefined { return this.tryGetToken(ComandosParser.TEXTO, 0); }
	public NUMERO(): TerminalNode | undefined { return this.tryGetToken(ComandosParser.NUMERO, 0); }
	public PALABRA(): TerminalNode | undefined { return this.tryGetToken(ComandosParser.PALABRA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ComandosParser.RULE_valorArgumento; }
	// @Override
	public enterRule(listener: ComandosListener): void {
		if (listener.enterValorArgumento) {
			listener.enterValorArgumento(this);
		}
	}
	// @Override
	public exitRule(listener: ComandosListener): void {
		if (listener.exitValorArgumento) {
			listener.exitValorArgumento(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ComandosVisitor<Result>): Result {
		if (visitor.visitValorArgumento) {
			return visitor.visitValorArgumento(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


