import React from "react";
import { Paper } from "@mui/material";
import styles from "./styles";

export default function Home() {
    const textValues=['Codifique','Desenhe','Programe', 'Implemente']
  return (
    <div style={styles.body}>
      <Paper
        sx={styles.section1}
      >
        <div style={{height:'100%', color:'#fafafa', padding:10}}>
        <p style={styles.text}>{textValues}</p>
        <p>o seu futuro global agora!</p>
        <p>
          Domine as tecnologias utilizadas pelas empresas mais inovadoras do
          mundo e encare seu novo desafio profissional, evoluindo em comunidade
          com os melhores experts.
        </p>
        {/* <img src={bg1} /> */}
        </div>
      </Paper>
    </div>
  );
}
