grammar Comandos;

// --------------------
// REGLAS SINTÁCTICAS
// --------------------

programa
    : comando+ EOF
    ;

comando
    : prefijoComando nombreComando argumento*
    ;

prefijoComando
    : EXCLAMACION
    | AMPERSAND
    ;

nombreComando
    : PALABRA
    ;

argumento
    : argumentoPosicional
    | argumentoOpcional
    ;

argumentoPosicional
    : ARROBA valorArgumento
    ;

argumentoOpcional
    : GUION_GUION nombreArgumento IGUAL valorArgumento
    | GUION_GUION nombreArgumento valorArgumento
    ;

nombreArgumento
    : PALABRA
    ;

valorArgumento
    : TEXTO
    | NUMERO
    | PALABRA
    ;


// --------------------
// TOKENS / REGLAS LÉXICAS
// --------------------

EXCLAMACION : '!';
AMPERSAND   : '&';
ARROBA      : '@';
GUION_GUION : '--';
IGUAL       : '=';

TEXTO
    : '"' (~["\r\n])* '"'
    ;

NUMERO
    : [0-9]+ ('.' [0-9]+)?
    ;

PALABRA
    : [a-zA-Z_] [a-zA-Z0-9_]*
    ;
WS
    : [ \t\r\n]+ -> skip
    ;