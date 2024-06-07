INSERT INTO levels (id, title, description) VALUES
(1, 'Nivel 1: Fundamentos del Idioma', 'Este nivel cubre los fundamentos básicos del idioma, incluyendo verbos, artículos y preposiciones, pronombres, adverbios, sustantivos y adjetivos.');

INSERT INTO lessons (id, title, description, levelId) VALUES
(1, 'Verbos', 'Esta lección cubre los aspectos fundamentales de los verbos.', 1),
(2, 'Preposiciones', 'Esta lección cubre los diferentes tipos de preposiciones y su uso correcto.', 1),
(3, 'Artículos', 'Esta lección cubre los diferentes tipos de artículos y preposiciones y su uso correcto.', 1),
(4, 'PERSONAL PRONOUNS – PRONOMBRES PERSONALES', 'Esta lección cubre los diferentes tipos de pronombres y su uso correcto.', 1),
(5, 'Adverbios', 'Esta lección cubre los diferentes tipos de adverbios y su formación y uso.', 1),
(6, 'Sustantivos', 'Un sustantivo es una palabra que se utiliza para nombrar a personas, animales, cosas, lugares, ideas, eventos o sentimientos.', 1),
(7, 'Adjetivos', 'Esta lección cubre los diferentes tipos de adjetivos y sus funciones.', 1);

INSERT INTO sublessons (id, title, description, lessonId) VALUES
(1, 'Definición', 'Definición de verbos y su uso en el idioma.', 1),
(2, 'Tipos', 'Diferentes tipos de verbos.', 1),
(3, 'Conjugación', 'Cómo conjugar verbos en diferentes tiempos y modos.', 1),
(4, 'Preposiciones de Lugar', 'Uso de preposiciones para indicar lugar.', 2),
(5, 'Preposiciones de Tiempo', 'Uso de preposiciones para indicar tiempo.', 2),
(6, 'Preposiciones de Dirección', 'Uso de preposiciones para indicar dirección.', 2),
(7, 'Preposiciones de Causa', 'Uso de preposiciones para indicar causa.', 2),
(8, 'Tipos de Artículos', 'Diferentes tipos de artículos y su uso.', 3),
(9, 'Uso de los Artículos', 'Reglas y excepciones en el uso de los artículos.', 3),
(10, 'Excepciones', 'Reglas y excepciones en el uso de los artículos.', 3),
(11, 'Definición', 'Definición de pronombres y su uso.', 4),
(12, 'Sujetos (Subject pronouns)', 'Ejemplo: "Maria is a teacher. She is very smart." ("Maria es una profesora. Ella es muy inteligente.") I - YO HE - EL SHE - ELLA IT - COSA ANIMAL O LUGAR YOU - TU/ USTED/USTEDES WE - NOSOTROS/NOSOTRAS THEY - ELLOS/ELLAS', 4),
(13, 'Objetos (Object pronouns)', 'me: me you: te / a ti / le / a usted him: lo / le / a él her: la / le / a ella it: lo / la (para cosas o animales de género neutro) us: nos them: los / las / les / a ellos / a ellas', 4),
(14, 'Definición', 'Definición de adverbios y su uso.', 5),
(15, 'Tipos y usos', 'su uso.', 5),
(16, 'Formación', 'Cómo se forman los adverbios.', 5),
(17, 'Definición', 'Definición de sustantivos y su uso.', 6),
(18, 'Comunes (Common nouns)', 'Cualquier clase general de personas, lugares, cosas o ideas. Persona: "teacher" (maestro/a) Lugar: "city" (ciudad) Cosa: "book" (libro) Idea: "freedom" (libertad)', 6),
(19, 'Propios (Proper nouns)', 'Qué son los sustantivos propios y cómo se usan. Una persona, lugar o cosa específica y siempre se escriben con mayúscula. Ejemplos: Persona: "Albert Einstein" Lugar: "New York" Cosa: "Eiffel Tower"', 6),
(20, 'Sustantivos Concretos', 'Qué son los sustantivos concretos y cómo se usan.', 6),
(21, 'Sustantivos Abstractos', 'Qué son los sustantivos abstractos y cómo se usan.', 6),
(22, 'Sustantivos Contables', 'Qué son los sustantivos contables y cómo se usan.', 6),
(23, 'Sustantivos Incontables', 'Qué son los sustantivos incontables y cómo se usan.', 6),
(24, 'Definición', 'Definición de adjetivos y su uso.', 7),
(25, 'Tipos de Adjetivos', 'Qué son los adjetivos y cómo se usan.', 7),
(26, 'Funciones de Adjetivos', 'Las diferentes funciones de los adjetivos en una oración.', 7),
(27, 'Posición de Adjetivos', 'Dónde colocar los adjetivos en una oración.', 7);

INSERT INTO games (id, type, question, description, levelId) VALUES
(1, 'multiple-choice', '¿Qué es una variable?', 'Selecciona la opción correcta que define una variable.', 1),
(2, 'complete-the-word', 'Un espacio en memoria para almacenar datos se llama: ___', 'Completa la palabra correcta para definir una variable.', 1),
(3, 'type-the-word', 'Escribe la palabra que define un espacio en memoria para almacenar datos.', 'Escribe la palabra correcta.', 1),
(4, 'multiple-choice', '¿Cuál de los siguientes es un tipo de dato?', 'Selecciona la opción correcta que es un tipo de dato.', 1),
(5, 'complete-the-word', 'Un tipo de dato entero se llama: ___', 'Completa la palabra correcta para definir un tipo de dato entero.', 1),
(6, 'type-the-word', 'Escribe la palabra que define un tipo de dato entero.', 'Escribe la palabra correcta.', 1),
(7, 'multiple-choice', '¿Cuál de las siguientes es una estructura de control?', 'Selecciona la opción correcta que define una estructura de control.', 1),
(8, 'complete-the-word', 'Una estructura de control que permite decisiones condicionales se llama: ___', 'Completa la palabra correcta para definir una estructura de control condicional.', 1),
(9, 'type-the-word', 'Escribe la palabra que define una estructura de control condicional.', 'Escribe la palabra correcta.', 1);

INSERT INTO options (id, value, correct, gameId) VALUES
(1, 'Un espacio en memoria para almacenar datos', true, 1),
(2, 'Una instrucción de control', false, 1),
(3, 'Una función', false, 1),
(4, 'variable', true, 2),
(5, 'variable', true, 3),
(6, 'int', true, 4),
(7, 'if-else', false, 4),
(8, 'función', false, 4),
(9, 'int', true, 5),
(10, 'int', true, 6),
(11, 'if-else', true, 7),
(12, 'variable', false, 7),
(13, 'función', false, 7),
(14, 'if-else', true, 8),
(15, 'if-else', true, 9);