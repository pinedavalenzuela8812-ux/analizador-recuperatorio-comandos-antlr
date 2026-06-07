// Generated from Comandos.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ComandosListener from './ComandosListener.js';
import ComandosVisitor from './ComandosVisitor.js';

const serializedATN = [4,1,9,60,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,1,
1,1,1,1,5,1,29,8,1,10,1,12,1,32,9,1,1,2,1,2,1,3,1,3,1,4,1,4,3,4,40,8,4,1,
5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,54,8,6,1,7,1,7,1,8,1,8,
1,8,0,0,9,0,2,4,6,8,10,12,14,16,0,2,1,0,1,2,1,0,6,8,54,0,19,1,0,0,0,2,25,
1,0,0,0,4,33,1,0,0,0,6,35,1,0,0,0,8,39,1,0,0,0,10,41,1,0,0,0,12,53,1,0,0,
0,14,55,1,0,0,0,16,57,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,20,21,1,0,0,0,
21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,0,0,1,24,1,1,0,0,0,25,
26,3,4,2,0,26,30,3,6,3,0,27,29,3,8,4,0,28,27,1,0,0,0,29,32,1,0,0,0,30,28,
1,0,0,0,30,31,1,0,0,0,31,3,1,0,0,0,32,30,1,0,0,0,33,34,7,0,0,0,34,5,1,0,
0,0,35,36,5,8,0,0,36,7,1,0,0,0,37,40,3,10,5,0,38,40,3,12,6,0,39,37,1,0,0,
0,39,38,1,0,0,0,40,9,1,0,0,0,41,42,5,3,0,0,42,43,3,16,8,0,43,11,1,0,0,0,
44,45,5,4,0,0,45,46,3,14,7,0,46,47,5,5,0,0,47,48,3,16,8,0,48,54,1,0,0,0,
49,50,5,4,0,0,50,51,3,14,7,0,51,52,3,16,8,0,52,54,1,0,0,0,53,44,1,0,0,0,
53,49,1,0,0,0,54,13,1,0,0,0,55,56,5,8,0,0,56,15,1,0,0,0,57,58,7,1,0,0,58,
17,1,0,0,0,4,21,30,39,53];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ComandosParser extends antlr4.Parser {

    static grammarFileName = "Comandos.g4";
    static literalNames = [ null, "'!'", "'&'", "'@'", "'--'", "'='" ];
    static symbolicNames = [ null, "EXCLAMACION", "AMPERSAND", "ARROBA", 
                             "GUION_GUION", "IGUAL", "TEXTO", "NUMERO", 
                             "PALABRA", "WS" ];
    static ruleNames = [ "programa", "comando", "prefijoComando", "nombreComando", 
                         "argumento", "argumentoPosicional", "argumentoOpcional", 
                         "nombreArgumento", "valorArgumento" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ComandosParser.ruleNames;
        this.literalNames = ComandosParser.literalNames;
        this.symbolicNames = ComandosParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ComandosParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.comando();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1 || _la===2);
	        this.state = 23;
	        this.match(ComandosParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ComandosParser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25;
	        this.prefijoComando();
	        this.state = 26;
	        this.nombreComando();
	        this.state = 30;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 27;
	            this.argumento();
	            this.state = 32;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	prefijoComando() {
	    let localctx = new PrefijoComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ComandosParser.RULE_prefijoComando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!(_la===1 || _la===2)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreComando() {
	    let localctx = new NombreComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ComandosParser.RULE_nombreComando);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(ComandosParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumento() {
	    let localctx = new ArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ComandosParser.RULE_argumento);
	    try {
	        this.state = 39;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37;
	            this.argumentoPosicional();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 38;
	            this.argumentoOpcional();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoPosicional() {
	    let localctx = new ArgumentoPosicionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ComandosParser.RULE_argumentoPosicional);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(ComandosParser.ARROBA);
	        this.state = 42;
	        this.valorArgumento();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentoOpcional() {
	    let localctx = new ArgumentoOpcionalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ComandosParser.RULE_argumentoOpcional);
	    try {
	        this.state = 53;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 44;
	            this.match(ComandosParser.GUION_GUION);
	            this.state = 45;
	            this.nombreArgumento();
	            this.state = 46;
	            this.match(ComandosParser.IGUAL);
	            this.state = 47;
	            this.valorArgumento();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 49;
	            this.match(ComandosParser.GUION_GUION);
	            this.state = 50;
	            this.nombreArgumento();
	            this.state = 51;
	            this.valorArgumento();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	nombreArgumento() {
	    let localctx = new NombreArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ComandosParser.RULE_nombreArgumento);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(ComandosParser.PALABRA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valorArgumento() {
	    let localctx = new ValorArgumentoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ComandosParser.RULE_valorArgumento);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 448) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ComandosParser.EOF = antlr4.Token.EOF;
ComandosParser.EXCLAMACION = 1;
ComandosParser.AMPERSAND = 2;
ComandosParser.ARROBA = 3;
ComandosParser.GUION_GUION = 4;
ComandosParser.IGUAL = 5;
ComandosParser.TEXTO = 6;
ComandosParser.NUMERO = 7;
ComandosParser.PALABRA = 8;
ComandosParser.WS = 9;

ComandosParser.RULE_programa = 0;
ComandosParser.RULE_comando = 1;
ComandosParser.RULE_prefijoComando = 2;
ComandosParser.RULE_nombreComando = 3;
ComandosParser.RULE_argumento = 4;
ComandosParser.RULE_argumentoPosicional = 5;
ComandosParser.RULE_argumentoOpcional = 6;
ComandosParser.RULE_nombreArgumento = 7;
ComandosParser.RULE_valorArgumento = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(ComandosParser.EOF, 0);
	};

	comando = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComandoContext);
	    } else {
	        return this.getTypedRuleContext(ComandoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_comando;
    }

	prefijoComando() {
	    return this.getTypedRuleContext(PrefijoComandoContext,0);
	};

	nombreComando() {
	    return this.getTypedRuleContext(NombreComandoContext,0);
	};

	argumento = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentoContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrefijoComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_prefijoComando;
    }

	EXCLAMACION() {
	    return this.getToken(ComandosParser.EXCLAMACION, 0);
	};

	AMPERSAND() {
	    return this.getToken(ComandosParser.AMPERSAND, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterPrefijoComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitPrefijoComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitPrefijoComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_nombreComando;
    }

	PALABRA() {
	    return this.getToken(ComandosParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterNombreComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitNombreComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitNombreComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_argumento;
    }

	argumentoPosicional() {
	    return this.getTypedRuleContext(ArgumentoPosicionalContext,0);
	};

	argumentoOpcional() {
	    return this.getTypedRuleContext(ArgumentoOpcionalContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoPosicionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_argumentoPosicional;
    }

	ARROBA() {
	    return this.getToken(ComandosParser.ARROBA, 0);
	};

	valorArgumento() {
	    return this.getTypedRuleContext(ValorArgumentoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterArgumentoPosicional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitArgumentoPosicional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitArgumentoPosicional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentoOpcionalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_argumentoOpcional;
    }

	GUION_GUION() {
	    return this.getToken(ComandosParser.GUION_GUION, 0);
	};

	nombreArgumento() {
	    return this.getTypedRuleContext(NombreArgumentoContext,0);
	};

	IGUAL() {
	    return this.getToken(ComandosParser.IGUAL, 0);
	};

	valorArgumento() {
	    return this.getTypedRuleContext(ValorArgumentoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterArgumentoOpcional(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitArgumentoOpcional(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitArgumentoOpcional(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NombreArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_nombreArgumento;
    }

	PALABRA() {
	    return this.getToken(ComandosParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterNombreArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitNombreArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitNombreArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorArgumentoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ComandosParser.RULE_valorArgumento;
    }

	TEXTO() {
	    return this.getToken(ComandosParser.TEXTO, 0);
	};

	NUMERO() {
	    return this.getToken(ComandosParser.NUMERO, 0);
	};

	PALABRA() {
	    return this.getToken(ComandosParser.PALABRA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.enterValorArgumento(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ComandosListener ) {
	        listener.exitValorArgumento(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ComandosVisitor ) {
	        return visitor.visitValorArgumento(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ComandosParser.ProgramaContext = ProgramaContext; 
ComandosParser.ComandoContext = ComandoContext; 
ComandosParser.PrefijoComandoContext = PrefijoComandoContext; 
ComandosParser.NombreComandoContext = NombreComandoContext; 
ComandosParser.ArgumentoContext = ArgumentoContext; 
ComandosParser.ArgumentoPosicionalContext = ArgumentoPosicionalContext; 
ComandosParser.ArgumentoOpcionalContext = ArgumentoOpcionalContext; 
ComandosParser.NombreArgumentoContext = NombreArgumentoContext; 
ComandosParser.ValorArgumentoContext = ValorArgumentoContext; 
