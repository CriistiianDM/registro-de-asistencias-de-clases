CREATE DATABASE attendance;
   

CREATE TABLE cuentas (
    cuenta_id varchar(10) UNIQUE PRIMARY KEY NOT NULL,
    email varchar(150) UNIQUE NOT NULL,
    contrasena varchar(20) NOT NULL
)

/* datos de la tabla cuentas */
/*-----------------------------------------------------------------------------------*/

INSERT INTO cuentas (cuenta_id, email, contrasena) VALUES
('1001013948', 'cristiank', '1234567890'),
('1001013947','eduardo@gmail.com','12345678'),
('1001013950','anguie@gmail.com','987654321'),
('1001013949','sebastian@gmail.com','123456789')

/*-----------------------------------------------------------------------------------*/


CREATE TABLE personas (
    identificacion varchar(10) PRIMARY KEY not null,
    p_nombre varchar(30) not null,
    s_nombre varchar(30),
    p_apellido varchar(30) not null,
    s_apellido varchar(30),
    dirrecion varchar(30) UNIQUE not null,
    tipo_persona varchar(10) not null,
    foreign key (identificacion) references cuentas(cuenta_id)
)


/* datos de la tabla personas */
/*-----------------------------------------------------------------------------------*/
INSERT INTO personas (identificacion, p_nombre, s_nombre, p_apellido, s_apellido, dirrecion, tipo_persona) VALUES
('1001013947', 'eduardo', '', 'gonzalez', '', 'calle 2', 'estudiante'),
('1001013948', 'cristian', 'duvan', 'machado', 'mosquera', 'calle 3', 'profesor'),
('1001013949', 'sebastian', 'camino', 'perez', 'mosquera', 'calle 4', 'estudiante')
('1001013950', 'angie', 'camino', 'muñoz', 'mosquera', 'calle 1', 'administrador')

/*-----------------------------------------------------------------------------------*/



CREATE TABLE asistencias (
    asistencia_id varchar(4) UNIQUE PRIMARY KEY not null,
    identificacion varchar(10),
    asistencia boolean not null,
    fecha_asistencia date not null,
    hora_asistencia time not null,
    foreign key (identificacion) references personas(identificacion)
)


/* datos de la tabla asistencia */
/*-----------------------------------------------------------------------------------*/
INSERT INTO asistencias (asistencia_id, identificacion, asistencia, fecha_asistencia, hora_asistencia) VALUES
('0001', '1001013948', 'true', '2020-01-01', '12:00:00'),
('0002', '1001013948', 'true', '2020-01-01', '12:00:00')

/*-----------------------------------------------------------------------------------*/


CREATE TABLE estudiantes (
    estudiante_id varchar(9) UNIQUE not null,
    identificacion varchar(10)  PRIMARY KEY not null,
    registro_materias varchar(4) UNIQUE not null,
    foreign key (registro_materias) references registro_asignaturas(registro_id),
    foreign key (identificacion) references personas(identificacion)
)

/* datos de la tabla estudiantes */
/*-----------------------------------------------------------------------------------*/
INSERT INTO estudiantes (estudiante_id, identificacion, registro_materias) VALUES
('202245637', '1001013947', '0001'),
('202245638', '1001013949', '0002')

/*-----------------------------------------------------------------------------------*/


CREATE TABLE administradores (
    identificacion varchar(10) PRIMARY KEY not null,
    codigo_administrador varchar(9) UNIQUE not null,
    foreign key (identificacion) references trabajadores(identificacion)
)


/* datos de la tabla administrador */
/*-----------------------------------------------------------------------------------*/
INSERT INTO administradores (identificacion, codigo_administrador) VALUES
('1001013950', '202212345')


/*-----------------------------------------------------------------------------------*/


CREATE TABLE profesores (
    identificacion varchar(10)  PRIMARY KEY not null,
    codigo_profesor varchar(9) UNIQUE not null,
    foreign key (identificacion) references trabajadores(identificacion)
)


/* datos de la tabla administrador */
/*-----------------------------------------------------------------------------------*/
INSERT INTO profesores (identificacion, codigo_profesor) VALUES
('1001013948', '202212345')

/*-----------------------------------------------------------------------------------*/


CREATE TABLE sedes (
    sede_id varchar(4) UNIQUE PRIMARY KEY not null,
    nombre_sede varchar(100) UNIQUE not null,
    direccion_sede varchar(70) UNIQUE not null,
)


/* datos de la tabla sedes */
/*-----------------------------------------------------------------------------------*/
INSERT INTO sedes (sede_id, nombre_sede, direccion_sede) VALUES
('0001', 'buga', 'calle 1')
INSERT INTO sedes (sede_id, nombre_sede, direccion_sede) VALUES
('0002', 'cartago', 'calle 2')
INSERT INTO sedes (sede_id, nombre_sede, direccion_sede) VALUES
('0003', 'yumbo', 'calle 3')
INSERT INTO sedes (sede_id, nombre_sede, direccion_sede) VALUES
('0004', 'zarzal', 'calle 4')
/*-----------------------------------------------------------------------------------*/


CREATE TABLE seguros_medicos (
    seguro_id varchar(4) UNIQUE PRIMARY KEY not null,
    arl varchar(70) UNIQUE not null,
    eps varchar(80) UNIQUE not null
)

/* datos de la tabla seguros_medicos */
/*-----------------------------------------------------------------------------------*/
INSERT INTO seguros_medicos (seguro_id, arl, eps) VALUES
('0001', 'arl 1', 'eps 1'),
('0002', 'arl 2', 'eps 2'),
('0003', 'arl 3', 'eps 3'),
('0004', 'arl 4', 'eps 4')
/*-----------------------------------------------------------------------------------*/


CREATE TABLE trabajadores (
    identificacion varchar(10) PRIMARY KEY not null,
    salario money not null,
    seguros_medicos_id varchar(4) not null,
    sede_id varchar(4) not null,
    foreign key (sede_id) references sedes(sede_id),
    foreign key (seguros_medicos_id) references seguros_medicos(seguro_id)
    foreign key (identificacion) references personas(identificacion)
)

/* datos de la tabla trabajadores */
/*-----------------------------------------------------------------------------------*/
INSERT INTO trabajadores (identificacion, salario, seguros_medicos_id, sede_id) VALUES
('1001013948', '10000', '0001', '0001'),
('1001013950', '30000', '0003', '0002')

/*-----------------------------------------------------------------------------------*/


CREATE TABLE cursos (
    curso_id varchar(4) UNIQUE PRIMARY KEY not null,
    materia_id varchar(4) not null,
    profesor_id varchar(10) not null,
    maximo_estudiantes varchar(2) not null,
    foreign key (materia_id) references materias(materia_id),
    foreign key (profesor_id) references profesores(identificacion)
)

/* datos de la tabla cursos */
/*-----------------------------------------------------------------------------------*/
INSERT INTO cursos (curso_id, materia_id, profesor_id, maximo_estudiantes) VALUES
('0001', '0001', '1001013948', '20'),
('0002', '0002', '1001013950', '30')

/*-----------------------------------------------------------------------------------*/

CREATE TABLE grupos_cursos (
    grupo_id varchar(4) UNIQUE PRIMARY KEY not null,
    curso_id varchar(4) not null,
    grupo_curso varchar(2) not null,
    hora_inicio time not null,
    horario_curso varchar(120) not null,
    foreign key (curso_id) references cursos(curso_id)
)

/* datos de la tabla grupos_cursos */
/*-----------------------------------------------------------------------------------*/
INSERT INTO grupos_cursos (grupo_id, curso_id, grupo_curso, hora_inicio, horario_curso) VALUES
('0001', '0001', '01', '12:00:00', 'lunes, martes ,viernes'),
('0002', '0002', '02', '12:00:00', 'lunes, martes, miercoles, jueves')
/*-----------------------------------------------------------------------------------*/


CREATE TABLE materias (
    materia_id varchar(4) UNIQUE PRIMARY KEY not null,
    nombre_materia varchar(80) UNIQUE not null,
    requisitos varchar(30) not null,
    creditos varchar(2) not null,
    habilitable boolean not null,
)

/* datos de la tabla materias */
/*-----------------------------------------------------------------------------------*/
INSERT INTO materias (materia_id, nombre_materia, requisitos, creditos, habilitable) VALUES
('0001', 'matematicas', '', '2', 'true'),
('0002', 'lenguaje', '', '2', 'true'),
('0003', 'ingles', '', '2', 'true'),
('0004', 'historia', '', '2', 'true'),
('0005', 'geografia', '', '2', 'true'),
('0006', 'biologia', '', '2', 'true')
/*-----------------------------------------------------------------------------------*/

CREATE TABLE listados_cursos (
    listado_id varchar(4) UNIQUE PRIMARY KEY not null,
    identificacion_estudiante varchar(10) not null,
    registro_id varchar(4) not null,
    grupo_id varchar(4) not null,
    foreign key (identificacion_estudiante) references estudiantes(identificacion),
    foreign key (registro_id) references registro_asignaturas(registro_id),
    foreign key (grupo_id) references grupos_cursos(grupo_id)
)


/* datos de la tabla listados_cursos */
/*-----------------------------------------------------------------------------------*/
INSERT INTO listados_cursos (listado_id, identificacion_estudiante, registro_id, grupo_id) VALUES
('0001', '1001013947', '0001', '0001'),
('0002', '1001013949', '0002', '0002')
/*-----------------------------------------------------------------------------------*/


CREATE TABLE registro_asignaturas (
    registro_id varchar(4) UNIQUE PRIMARY KEY not null,
    m_matriculadas varchar(2) not null
)
/* datos de la tabla listados_cursos */
/*-----------------------------------------------------------------------------------*/
INSERT INTO registro_asignaturas (registro_id, m_matriculadas) VALUES
('0001', '02'),
('0002', '02')

/*-----------------------------------------------------------------------------------*/
