<?php
/* Isso é um comentário em PHP */
$nome = "Maria Eduarda Pereira";
/* Variáveis tem um $ no início, seguindo do seu nome */
$idade = 35;
/* Arrays são criados com o comando array() com uma lista de
valores separados pro vírgula */
$animais_de_estimação = array("Juá", "Orisvaldo");
/* funções podem ser declaradas facilmente dentro de arquivos PHP
assim: */
function subtrair($a, $b)
{
    /* Operações matemáticas comuns em valores e variáveis seguem
    o mesmo padrão da maioria das linguagens como C e Javascript */
    $resultado = $a - $b;
    return $resultado;
}
?>
<html>

<head>
    <title>Página do <?= $nome ?></title>
</head>

<body>
    <h1>Página pessoal do <?= $nome ?></h1>
    Oi eu sou o <?= $nome ?>, tenho <?= $idade ?> anos e essa é
    minha lista de animais:
    <ul>
        <?php foreach ($animais_de_estimação as $animal) { ?>
            <li><?= $animal ?></li>
        <?php } ?>
    </ul>
    Obrigado por me visitar hoje, dia: <?= date("d/m/Y") ?><br />
    Caso tenha curiosidade, 1 - 1 = <?= subtrair(1, 1) ?>
</body>

</html>