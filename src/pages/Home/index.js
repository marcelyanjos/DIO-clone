import React from "react";
import styles from "./styles";
import Section1 from "./section1";
import Section2 from "./section2";
import Section5 from "./section5";
export default function Home() {
  
  return (
    <div style={styles.body}>
      <Section1 />
      <Section2 />
      <Section5 />
    </div>
  );
}
