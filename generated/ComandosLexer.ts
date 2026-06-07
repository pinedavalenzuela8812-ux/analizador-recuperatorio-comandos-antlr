// Generated from Comandos.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class ComandosLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"EXCLAMACION", "AMPERSAND", "ARROBA", "GUION_GUION", "IGUAL", "TEXTO", 
		"NUMERO", "PALABRA", "LETRA", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'!'", "'&'", "'@'", "'--'", "'='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "EXCLAMACION", "AMPERSAND", "ARROBA", "GUION_GUION", "IGUAL", 
		"TEXTO", "NUMERO", "PALABRA", "LETRA", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ComandosLexer._LITERAL_NAMES, ComandosLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ComandosLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(ComandosLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Comandos.g4"; }

	// @Override
	public get ruleNames(): string[] { return ComandosLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return ComandosLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return ComandosLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return ComandosLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\fH\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x07\x07%\n\x07\f\x07\x0E\x07(\v\x07\x03\x07\x03\x07\x03\b" +
		"\x06\b-\n\b\r\b\x0E\b.\x03\b\x03\b\x06\b3\n\b\r\b\x0E\b4\x05\b7\n\b\x03" +
		"\t\x03\t\x07\t;\n\t\f\t\x0E\t>\v\t\x03\n\x03\n\x03\v\x06\vC\n\v\r\v\x0E" +
		"\vD\x03\v\x03\v\x02\x02\x02\f\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02" +
		"\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x03\x02" +
		"\b\x05\x02\f\f\x0F\x0F$$\x03\x022;\x11\x02C\\aac|\xC3\xC3\xCB\xCB\xCF" +
		"\xCF\xD3\xD3\xD5\xD5\xDC\xDC\xE3\xE3\xEB\xEB\xEF\xEF\xF3\xF3\xF5\xF5\xFC" +
		"\xFC\x12\x022;C\\aac|\xC3\xC3\xCB\xCB\xCF\xCF\xD3\xD3\xD5\xD5\xDC\xDC" +
		"\xE3\xE3\xEB\xEB\xEF\xEF\xF3\xF3\xF5\xF5\xFC\xFC\x04\x02C\\c|\x05\x02" +
		"\v\f\x0F\x0F\"\"\x02M\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x03\x17\x03\x02\x02\x02\x05" +
		"\x19\x03\x02\x02\x02\x07\x1B\x03\x02\x02\x02\t\x1D\x03\x02\x02\x02\v " +
		"\x03\x02\x02\x02\r\"\x03\x02\x02\x02\x0F,\x03\x02\x02\x02\x118\x03\x02" +
		"\x02\x02\x13?\x03\x02\x02\x02\x15B\x03\x02\x02\x02\x17\x18\x07#\x02\x02" +
		"\x18\x04\x03\x02\x02\x02\x19\x1A\x07(\x02\x02\x1A\x06\x03\x02\x02\x02" +
		"\x1B\x1C\x07B\x02\x02\x1C\b\x03\x02\x02\x02\x1D\x1E\x07/\x02\x02\x1E\x1F" +
		"\x07/\x02\x02\x1F\n\x03\x02\x02\x02 !\x07?\x02\x02!\f\x03\x02\x02\x02" +
		"\"&\x07$\x02\x02#%\n\x02\x02\x02$#\x03\x02\x02\x02%(\x03\x02\x02\x02&" +
		"$\x03\x02\x02\x02&\'\x03\x02\x02\x02\')\x03\x02\x02\x02(&\x03\x02\x02" +
		"\x02)*\x07$\x02\x02*\x0E\x03\x02\x02\x02+-\t\x03\x02\x02,+\x03\x02\x02" +
		"\x02-.\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/6\x03\x02\x02" +
		"\x0202\x070\x02\x0213\t\x03\x02\x0221\x03\x02\x02\x0234\x03\x02\x02\x02" +
		"42\x03\x02\x02\x0245\x03\x02\x02\x0257\x03\x02\x02\x0260\x03\x02\x02\x02" +
		"67\x03\x02\x02\x027\x10\x03\x02\x02\x028<\t\x04\x02\x029;\t\x05\x02\x02" +
		":9\x03\x02\x02\x02;>\x03\x02\x02\x02<:\x03\x02\x02\x02<=\x03\x02\x02\x02" +
		"=\x12\x03\x02\x02\x02><\x03\x02\x02\x02?@\t\x06\x02\x02@\x14\x03\x02\x02" +
		"\x02AC\t\x07\x02\x02BA\x03\x02\x02\x02CD\x03\x02\x02\x02DB\x03\x02\x02" +
		"\x02DE\x03\x02\x02\x02EF\x03\x02\x02\x02FG\b\v\x02\x02G\x16\x03\x02\x02" +
		"\x02\t\x02&.46<D\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ComandosLexer.__ATN) {
			ComandosLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ComandosLexer._serializedATN));
		}

		return ComandosLexer.__ATN;
	}

}

