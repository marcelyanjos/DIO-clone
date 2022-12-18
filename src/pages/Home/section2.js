import React from "react";
import { Paper, styled, Card, Typography } from "@mui/material";
import styles from "./styles";
import theme from "../../components/theme";
import image1 from "../../assets/HomeAssets/section2/emerging-technologies.png";
import image2 from "../../assets/HomeAssets/section2/practice-with-challenges.png";
import image3 from "../../assets/HomeAssets/section2/build-your-portfolio.png";
import image4 from "../../assets/HomeAssets/section2/new-challenges.png";
import image5 from "../../assets/HomeAssets/section2/shared-knowledge.png";
import image6 from "../../assets/HomeAssets/section2/develop-your-authority.png";
import { ReactComponent as Icon2 } from "../../assets/HomeAssets/Icons/icon2.svg";
import { ReactComponent as Icon3 } from "../../assets/HomeAssets/Icons/icon3.svg";
import { ReactComponent as Icon6 } from "../../assets/HomeAssets/Icons/icon6.svg";
import { ReactComponent as Icon7 } from "../../assets/HomeAssets/Icons/icon7.svg";
import { ReactComponent as Icon8 } from "../../assets/HomeAssets/Icons/icon8.svg";
import { ReactComponent as Icon9 } from "../../assets/HomeAssets/Icons/icon9.svg";

export default function Section2() {
  return (
    <Paper sx={styles.section2}>
      <Card
        sx={{
          bgcolor: "transparent",
          height: "90%",
          color: "#fafafa",
          mt: "2.5rem",
          p: "1rem",
          boxShadow: "none",
          [theme.breakpoints.up("xl")]: {
            minWidth: "1180px",
          },
          [theme.breakpoints.down("xl")]: {
            width: "100%",
          },
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <Card
          sx={{
            padding: "0px 1.5rem 1.5rem",
            textAlign: "center",
            boxShadow: "none",
            bgcolor: "transparent",
            color: "#fafafa",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: "0.6em", fontFamily:'Open Sans' }}
          >
            O jeito DIO._ para você ganhar destaque mais rápido no mercado.
          </Typography>
          <div
            style={{
              width: "6rem",
              height: "0.5rem",
              borderRadius: "1rem",
              background:
                "linear-gradient(90deg, rgb(228, 16, 93) -3.55%, rgb(228, 16, 93) -3.54%, rgb(42, 34, 65) 100.21%)",
            }}
          />
        </Card>
        <Card sx={styles.cardLeft2}>
          <Card sx={styles.bodyCardLeft2}>
            <Icon2 fill="#e4105d" width={"2.5rem"} />
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 1.5, fontFamily:'Open Sans' }}
            >
              Aprendendo tecnologias emergentes
            </Typography>
            <Typography sx={{ fontSize: "16px", mb:2, fontFamily:'Open Sans' }}>
              Os nossos cursos e programas de formação são criados em conjunto
              com especialistas das empresas mais inovadoras do mundo, aplicando
              uma metodologia para que você domine as tecnologias utilizadas no
              mercado e também mergulhe nas novas e mais atuais tecnologias que
              impactarão o futuro dos negócios digitais.
            </Typography>
          </Card>
          <Card
            sx={{
              maxWidth: "700px",
              bgcolor: "transparent",
              boxShadow: "none",
              [theme.breakpoints.up("lg")]: { width: "50%" },
              [theme.breakpoints.down("lg")]: { width: "100%" },
            }}
          >
            <img src={image1} />
          </Card>
        </Card>
        <Card sx={styles.cardRight2}>
          <Card
            sx={{
              maxWidth: "700px",
              bgcolor: "transparent",
              boxShadow: "none",
              [theme.breakpoints.up("lg")]: { width: "50%" },
              [theme.breakpoints.down("lg")]: { width: "100%" },
            }}
          >
            <img src={image2} />
          </Card>
          <Card sx={styles.bodyCardRight2}>
            <Icon6 fill="#e4105d" width={"2.5rem"} />
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 1.5, fontFamily:'Open Sans' }}
            >
              Pratique com desafios de código
            </Typography>
            <Typography sx={{ fontSize: "16px", mb:2, fontFamily:'Open Sans' }}>
              Potencializamos o seu talento e aprimoramos as suas habilidades de
              pensamento computacional e resolução de desafios reais através de
              experiências práticas de codificação em nossa plataforma
              personalizada e exclusiva.
            </Typography>
          </Card>
        </Card>
        <Card sx={styles.cardLeft2}>
          <Card sx={styles.bodyCardLeft2}>
            <Icon7 fill="#e4105d" />
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 1.5, fontFamily:'OpenSans' }}
            >
              Construa seu portfólio com projetos de mercado
            </Typography>
            <Typography sx={{ fontSize: "16px", mb:2, fontFamily:'Open Sans' }}>
              Desenvolva projetos inovadores e crie soluções em conjunto com
              experts para manter o seu portfólio atualizado. Aplique na prática
              todos os conceitos e tecnologias aprendidas, criando um grande
              diferencial para os seus processos seletivos.
            </Typography>
          </Card>
          <Card
            sx={{
              maxWidth: "700px",
              bgcolor: "transparent",
              boxShadow: "none",
              [theme.breakpoints.up("lg")]: { width: "50%" },
              [theme.breakpoints.down("lg")]: { width: "100%" },
            }}
          >
            <img src={image3} />
          </Card>
        </Card>
        {/* card 4 */}
        <Card sx={styles.cardRight2}>
          <Card
            sx={{
              maxWidth: "700px",
              bgcolor: "transparent",
              boxShadow: "none",
              [theme.breakpoints.up("lg")]: { width: "50%" },
              [theme.breakpoints.down("lg")]: { width: "100%" },
            }}
          >
            <img src={image4} />
          </Card>
          <Card sx={styles.bodyCardRight2}>
            <Icon8 fill="#e4105d" />
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 1.5, fontFamily:'Open Sans' }}
            >
              Embarque em um novo desafio profissional
            </Typography>
            <Typography sx={{ fontSize: "16px", mb:2, fontFamily:'Open Sans' }}>
              Todos os dias dezenas de empresas acessam a nossa plataforma em
              busca dos talentos mais criativos, dinâmicos e colaborativos, além
              do conhecimento técnico. A nossa missão é te preparar para que
              você conecte-se com as melhores oportunidades.
            </Typography>
          </Card>
        </Card>
        {/* Card 5 */}
        <Card sx={styles.cardLeft2}>
          <Card sx={styles.bodyCardLeft2}>
            <Icon9 fill="#e4105d" />
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "bold", mb: 1.5, fontFamily:'Open Sans' }}
            >
              Compartilhe conhecimento em comunidade
            </Typography>
            <Typography sx={{ fontSize: "16px", mb:2, fontFamily:'Open Sans' }}>
              Somos mais de 600 mil pessoas, aprendendo de forma colaborativa,
              de gente ajudando gente, construindo e vibrando juntos a cada
              conquista.
            </Typography>
          </Card>
          <Card
            sx={{
              maxWidth: "700px",
              bgcolor: "transparent",
              boxShadow: "none",
              [theme.breakpoints.up("lg")]: { width: "50%" },
              [theme.breakpoints.down("lg")]: { width: "100%" },
            }}
          >
            <img src={image5} />
          </Card>
        </Card>
        {/* card 6 */}
        <Card sx={styles.cardRight2}>
          <Card
            sx={{
              maxWidth: "700px",
              bgcolor: "transparent",
              boxShadow: "none",
              [theme.breakpoints.up("lg")]: { width: "50%" },
              [theme.breakpoints.down("lg")]: { width: "100%" },
            }}
          >
            <img src={image6} />
          </Card>
          <Card sx={styles.bodyCardRight2}>
            <Icon3 fill="#e4105d" />
            <Typography
              sx={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily:'Open Sans', mb: 1.5 }}
            >
             Desenvolva sua autoridade como expert
            </Typography>
            <Typography sx={{ fontSize: "16px", mb:2, fontFamily:'Open Sans' }}>
            Publique artigos e compartilhe seus projetos, tornando-se referência para toda a comunidade de tecnologia.
            </Typography>
          </Card>
        </Card>
      </Card>
    </Paper>
  );
}
