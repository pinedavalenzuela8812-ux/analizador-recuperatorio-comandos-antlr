// Generated from Comandos.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,9,66,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,3,
1,4,1,4,1,5,1,5,5,5,33,8,5,10,5,12,5,36,9,5,1,5,1,5,1,6,4,6,41,8,6,11,6,
12,6,42,1,6,1,6,4,6,47,8,6,11,6,12,6,48,3,6,51,8,6,1,7,1,7,5,7,55,8,7,10,
7,12,7,58,9,7,1,8,4,8,61,8,8,11,8,12,8,62,1,8,1,8,0,0,9,1,1,3,2,5,3,7,4,
9,5,11,6,13,7,15,8,17,9,1,0,5,3,0,10,10,13,13,34,34,1,0,48,57,3,0,65,90,
95,95,97,122,4,0,48,57,65,90,95,95,97,122,3,0,9,10,13,13,32,32,71,0,1,1,
0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,
1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,0,0,3,21,1,0,0,0,5,23,1,0,0,0,
7,25,1,0,0,0,9,28,1,0,0,0,11,30,1,0,0,0,13,40,1,0,0,0,15,52,1,0,0,0,17,60,
1,0,0,0,19,20,5,33,0,0,20,2,1,0,0,0,21,22,5,38,0,0,22,4,1,0,0,0,23,24,5,
64,0,0,24,6,1,0,0,0,25,26,5,45,0,0,26,27,5,45,0,0,27,8,1,0,0,0,28,29,5,61,
0,0,29,10,1,0,0,0,30,34,5,34,0,0,31,33,8,0,0,0,32,31,1,0,0,0,33,36,1,0,0,
0,34,32,1,0,0,0,34,35,1,0,0,0,35,37,1,0,0,0,36,34,1,0,0,0,37,38,5,34,0,0,
38,12,1,0,0,0,39,41,7,1,0,0,40,39,1,0,0,0,41,42,1,0,0,0,42,40,1,0,0,0,42,
43,1,0,0,0,43,50,1,0,0,0,44,46,5,46,0,0,45,47,7,1,0,0,46,45,1,0,0,0,47,48,
1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,51,1,0,0,0,50,44,1,0,0,0,50,51,1,
0,0,0,51,14,1,0,0,0,52,56,7,2,0,0,53,55,7,3,0,0,54,53,1,0,0,0,55,58,1,0,
0,0,56,54,1,0,0,0,56,57,1,0,0,0,57,16,1,0,0,0,58,56,1,0,0,0,59,61,7,4,0,
0,60,59,1,0,0,0,61,62,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,64,1,0,0,0,
64,65,6,8,0,0,65,18,1,0,0,0,7,0,34,42,48,50,56,62,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ComandosLexer extends antlr4.Lexer {

    static grammarFileName = "Comandos.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'!'", "'&'", "'@'", "'--'", "'='" ];
	static symbolicNames = [ null, "EXCLAMACION", "AMPERSAND", "ARROBA", "GUION_GUION", 
                          "IGUAL", "TEXTO", "NUMERO", "PALABRA", "WS" ];
	static ruleNames = [ "EXCLAMACION", "AMPERSAND", "ARROBA", "GUION_GUION", 
                      "IGUAL", "TEXTO", "NUMERO", "PALABRA", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

ComandosLexer.EOF = antlr4.Token.EOF;
ComandosLexer.EXCLAMACION = 1;
ComandosLexer.AMPERSAND = 2;
ComandosLexer.ARROBA = 3;
ComandosLexer.GUION_GUION = 4;
ComandosLexer.IGUAL = 5;
ComandosLexer.TEXTO = 6;
ComandosLexer.NUMERO = 7;
ComandosLexer.PALABRA = 8;
ComandosLexer.WS = 9;



