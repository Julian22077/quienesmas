import { useState } from "react";

function App() {
  const [seccion, setSeccion] = useState(null);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntaje, setPuntaje] = useState(0);
  const [terminado, setTerminado] = useState(false);

  // 🏀 BASKET (TODO IGUAL)
  const preguntasBasket = [
    {
      pregunta: "¿Quién tiene más MVP?",
      opciones: [
        { texto: "Michael Jordan", correcta: false },
        { texto: "Kareem Abdul-Jabbar", correcta: true },
      ],
    },
    {
      pregunta: "¿Quién tiene más anillos?",
      opciones: [
        { texto: "LeBron James", correcta: false },
        { texto: "Bill Russell", correcta: true },
      ],
    },
    {
      pregunta: "¿Quién tiene más triples?",
      opciones: [
        { texto: "Stephen Curry", correcta: true },
        { texto: "James Harden", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más rebotes?",
      opciones: [
        { texto: "Bill Russell", correcta: false },
        { texto: "Wilt Chamberlain", correcta: true },
      ],
    },
    {
      pregunta: "¿Quién tiene más asistencias?",
      opciones: [
        { texto: "John Stockton", correcta: true },
        { texto: "Jason Kidd", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más puntos anotados?",
      opciones: [
        { texto: "Kobe Bryant", correcta: false },
        { texto: "Karl Malone", correcta: true },
      ],
    },
    {
      pregunta: "¿Quién tiene más triples-dobles?",
      opciones: [
        { texto: "Russell Westbrook", correcta: true },
        { texto: "Oscar Robertson", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más dobles-dobles?",
      opciones: [
        { texto: "Tim Duncan", correcta: true },
        { texto: "Karl Malone", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más robos?",
      opciones: [
        { texto: "Michael Jordan", correcta: true },
        { texto: "Gary Payton", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más porcentaje de tiro de tres?",
      opciones: [
        { texto: "Seth Curry", correcta: false },
        { texto: "Steve Kerr", correcta: true },
      ],
    },
  ];

  // ⚽ FUTBOL (TODO IGUAL)
  const preguntasFutbol = [
    {
      pregunta: "¿Quién tiene más Balones de Oro?",
      opciones: [
        { texto: "Cristiano Ronaldo", correcta: false },
        { texto: "Lionel Messi", correcta: true },
      ],
    },
    {
      pregunta: "¿Quién tiene más Champions?",
      opciones: [
        { texto: "Cristiano Ronaldo", correcta: true },
        { texto: "Lionel Messi", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más goles?",
      opciones: [
        { texto: "Pelé", correcta: true },
        { texto: "Puskás", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más asistencias?",
      opciones: [
        { texto: "Pelé", correcta: false },
        { texto: "Lionel Messi", correcta: true },
      ],
    },
    {
      pregunta: "¿Quién tiene más goles en champions?",
      opciones: [
        { texto: "Karim Benzema", correcta: true },
        { texto: "Raúl González", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más goles en mundiales?",
      opciones: [
        { texto: "Ronaldo Nazário", correcta: false },
        { texto: "Miroslav Klose", correcta: true },
      ],
    },
    {
      pregunta: "¿Quién tiene más goles de cabeza?",
      opciones: [
        { texto: "Cristiano Ronaldo", correcta: true },
        { texto: "Pelé", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más atajadas?",
      opciones: [
        { texto: "Iker Casillas", correcta: false },
        { texto: "Gianluigi Buffon", correcta: true },
      ],
    },
    {
      pregunta: "¿Quién tiene más goles de penalti?",
      opciones: [
        { texto: "Ronaldinho", correcta: true },
        { texto: "Sergio Ramos", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más mundiales?",
      opciones: [
        { texto: "Pelé", correcta: true },
        { texto: "Cafu", correcta: false },
      ],
    },
  ];

  // 🎵 MUSICA (YA CORREGIDA)
  const preguntasMusica = [
    {
      pregunta: "¿Quién tiene más premios Grammy?",
      opciones: [
        { texto: "Beyoncé", correcta: true },
        { texto: "Taylor Swift", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más ventas de álbumes?",
      opciones: [
        { texto: "Michael Jackson", correcta: true },
        { texto: "Eminem", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más discos vendidos en la historia?",
      opciones: [
        { texto: "The Beatles", correcta: true },
        { texto: "Elvis Presley", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más canciones #1 en Billboard Hot 100?",
      opciones: [
        { texto: "The Beatles", correcta: true },
        { texto: "Drake", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más semanas en el #1 del Billboard?",
      opciones: [
        { texto: "Mariah Carey", correcta: true },
        { texto: "Rihanna", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más premios Billboard Music Awards?",
      opciones: [
        { texto: "Drake", correcta: true },
        { texto: "Taylor Swift", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más certificaciones de diamante?",
      opciones: [
        { texto: "Eminem", correcta: true },
        { texto: "Kanye West", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más álbumes #1 en Billboard?",
      opciones: [
        { texto: "Jay-Z", correcta: true },
        { texto: "Kanye West", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más premios MTV Video Music Awards?",
      opciones: [
        { texto: "Beyoncé", correcta: true },
        { texto: "Madonna", correcta: false },
      ],
    },
    {
      pregunta: "¿Quién tiene más canciones en el Billboard Hot 100?",
      opciones: [
        { texto: "Drake", correcta: true },
        { texto: "Elvis Presley", correcta: false },
      ],
    },
  ];

  const preguntas =
    seccion === "basket"
      ? preguntasBasket
      : seccion === "futbol"
      ? preguntasFutbol
      : preguntasMusica;

  const manejarRespuesta = (correcta) => {
    if (correcta) setPuntaje(puntaje + 1);

    const siguiente = preguntaActual + 1;
    if (siguiente < preguntas.length) {
      setPreguntaActual(siguiente);
    } else {
      setTerminado(true);
    }
  };

  const reiniciar = () => {
    setSeccion(null);
    setPreguntaActual(0);
    setPuntaje(0);
    setTerminado(false);
  };

  const styles = {
    container: {
      fontFamily: "Arial",
      textAlign: "center",
      padding: "20px",
    },
    botones: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      marginTop: "20px",
    },
    boton: {
      padding: "10px 20px",
      backgroundColor: "#333",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
    },
    vsContainer: {
      display: "flex",
      height: "250px",
      marginTop: "20px",
      borderRadius: "10px",
      overflow: "hidden",
    },
    ladoIzq: {
      flex: 1,
      backgroundColor: "#e74c3c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      cursor: "pointer",
    },
    ladoDer: {
      flex: 1,
      backgroundColor: "#3498db",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      cursor: "pointer",
    },
    vs: {
      width: "80px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      backgroundColor: "#fff",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Quien sabe mas</h1>

      {!seccion && (
        <div>
          <h2>Escoge categoria</h2>
          <div style={styles.botones}>
            <button style={styles.boton} onClick={() => setSeccion("basket")}>
              Basket
            </button>
            <button style={styles.boton} onClick={() => setSeccion("futbol")}>
              Futbol
            </button>
            <button style={styles.boton} onClick={() => setSeccion("musica")}>
              Musica
            </button>
          </div>
        </div>
      )}

      {seccion && !terminado && (
        <div>
          <h2>{preguntas[preguntaActual].pregunta}</h2>

          <div style={styles.vsContainer}>
            <div
              style={styles.ladoIzq}
              onClick={() =>
                manejarRespuesta(
                  preguntas[preguntaActual].opciones[0].correcta
                )
              }
            >
              {preguntas[preguntaActual].opciones[0].texto}
            </div>

            <div style={styles.vs}>VS</div>

            <div
              style={styles.ladoDer}
              onClick={() =>
                manejarRespuesta(
                  preguntas[preguntaActual].opciones[1].correcta
                )
              }
            >
              {preguntas[preguntaActual].opciones[1].texto}
            </div>
          </div>
        </div>
      )}

      {terminado && (
        <div>
          <h2>Resultado</h2>
          <p>{puntaje} / {preguntas.length}</p>
          <button style={styles.boton} onClick={reiniciar}>
            Reiniciar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;