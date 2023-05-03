import React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  useTheme,
  Tab,
  Tabs,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  Badge,
  LinearProgress,
  Step,
  StepLabel,
  Stepper,
  stepConnectorClasses,
  StepConnector,
  styled,
  
} from "@mui/material";
import { tokens } from "../../theme";
import { MoreVert } from "@mui/icons-material";
import { useState } from "react";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [tabIndex, setTabIndex] = useState(0);
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#784af4',
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  }));

  return (
    <Box ml={2} sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <img
          alt="carbon free wallpaper"
          src={`/assets/carbonwallpaper.png`}
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            objectFit: "cover",
            width: "100%",
            maxHeight: "300px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              width="100px"
              height="100px"
              alt=""
              style={{
                cursor: "pointer",
                borderRadius: "10px",
                objectFit: "cover",
              }}
              src={`/assets/carbonfree.png`}
            />
            <Box sx={{ ml: 2 }}>
              <Typography variant="h3">Carbon Free</Typography>
              <Typography variant="h6">11.292 seguidores</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              variant="contained"
              size="large"
              style={{
                marginRight: "20px",
                backgroundColor: colors.primary[400],
              }}
            >
              <Typography variant="h6">Seguir</Typography>
            </Button>
            <IconButton>
              <MoreVert />
            </IconButton>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box
              sx={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                py: 1,
              }}
            >
              <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                sx={{
                  "& .MuiTabs-indicator": {
                    backgroundColor: colors.blueAccent[500],
                  },
                  "& .MuiTab-root": { color: colors.grey },
                  "& .Mui-selected": { color: colors.blueAccent[500] },
                }}
              >
                <Tab label="Publicações" style={{ marginRight: "20px" }} />
                <Tab label="Atualizações" style={{ marginRight: "20px" }} />
                <Tab label="Linha do tempo" style={{ marginRight: "20px" }} />
                <Tab label="Descrição" />
              </Tabs>
            </Box>
            <Box sx={{ padding: "20px 0 20px 0" }}>
              {tabIndex === 0 && (
                <>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        padding: "10px",
                        borderRadius: "10px",
                        marginRight: "10px",
                        display: "grid",
                        width: "60%",
                        boxShadow: "0px 0px 16px -8px rgba(0,0,0,0.68)",
                        backgroundColor: colors.primary[400],
                      }}
                    >
                      <Box
                        sx={{
                          display: "grid",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          <img
                            alt=""
                            src={`/assets/carbonfree.png`}
                            style={{
                              width: "70px",
                              height: "70px",
                              borderRadius: "10px",
                              objectFit: "cover",
                            }}
                          />
                          <Box sx={{ display: "grid", marginLeft: "10px" }}>
                            <Typography variant="h4">Carbon Free</Typography>
                            <Typography variant="h5">Gst:32490-394</Typography>
                          </Box>
                        </Box>
                        <Typography variant="h5" style={{ marginLeft: "5px" }}>
                          Meta concluída com sucesso!
                        </Typography>
                      </Box>
                      <Box>
                        <img
                          alt=""
                          src={`/assets/elonpost.jpg`}
                          style={{
                            marginTop: "10px",
                            width: "100%",
                            maxHeight: "500px",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "grid",
                          justifyContent: "center",
                          cursor: "pointer",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          <IconButton>
                            <ExpandMoreOutlinedIcon />
                          </IconButton>
                          <Typography variant="h6">
                            Ver comentários (10)
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          marginLeft: "20px",
                          marginBottom: "10px",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={`/assets/elonmusk.jpeg`}
                          alt=""
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover",
                            borderRadius: "50%",
                          }}
                        />
                        <Box
                          sx={{
                            width: "86%",
                            display: "flex",
                            marginLeft: "10px",
                            backgroundColor: colors.primary[500],
                            borderRadius: "2px",
                          }}
                        >
                          <InputBase
                            placeholder="Adicionar um comentário..."
                            sx={{ flex: 1, ml: "10px" }}
                          />
                          <IconButton type="button">
                            <SendOutlinedIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        padding: "10px",
                        borderRadius: "10px",
                        WebkitBoxShadow: "0px 0px 16px -8px rgba(0,0,0,0.68)",
                        boxShadow: "0px 0px 16px -8px rgba(0,0,0,0.68)",
                        marginleft: "10px",
                        backgroundColor: colors.primary[400],
                        height: "450px",
                        width: "40%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          margin: "10px 0px 20px 0px",
                          alignItems: "center",
                        }}
                      >
                        <ShareOutlinedIcon />
                        <Typography variant="h3" style={{ marginLeft: "10px" }}>
                          Ligações
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <BadgeOutlinedIcon sx={{ fontSize: "25px" }} />
                        <Typography variant="h4" style={{ marginLeft: "10px" }}>
                          Membros
                        </Typography>
                      </Box>
                      <List>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>RM</Avatar>
                          </ListItemAvatar>
                          <Typography variant="h5">Rafael Maranhão</Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>EM</Avatar>
                          </ListItemAvatar>
                          <Typography variant="h5">Enzo Martins</Typography>
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>PC</Avatar>
                          </ListItemAvatar>
                          <Typography variant="h5">Pedro Coimbra</Typography>
                        </ListItem>
                      </List>
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                          }}
                        >
                          <IconButton>
                            <ExpandMoreOutlinedIcon />
                          </IconButton>
                          <Typography variant="h6">
                            Ver todos os membros (4)
                          </Typography>
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "10px",
                        }}
                      >
                        <GroupsOutlinedIcon sx={{ fontSize: "25px" }} />
                        <Typography variant="h4" style={{ marginLeft: "10px" }}>
                          Grupos associados
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex" }}>
                        <img
                          src={`/assets/cesupinha.png`}
                          alt=""
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "10px",
                            objectFit: "cover",
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "10px",
                          }}
                        >
                          <Typography variant="h5">
                            Cesupa - Centro Universitário do Estado do Pará
                          </Typography>
                          <Box sx={{ display: "flex" }}>
                            <Typography
                              variant="h6"
                              style={{ marginRight: "20px" }}
                            >
                              20.304 Membros
                            </Typography>
                            <Typography
                              variant="h6"
                              style={{ color: colors.greenAccent[400] }}
                            >
                              3.291 On-line
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </>
              )}
              {tabIndex === 1 && (
                <>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        padding: "20px 10px 20px 10px",
                        borderRadius: "10px",
                        marginRight: "10px",
                        display: "grid",
                        width: "60%",
                        boxShadow: "0px 0px 16px -8px rgba(0,0,0,0.68)",
                        backgroundColor: colors.primary[400],
                      }}
                    >
                      <Box sx={{ display: "flex" }}>
                        <img
                          src={`/assets/carbonfree.png`}
                          alt=""
                          style={{
                            width: "70px",
                            height: "70px",
                            borderRadius: "10px",
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            marginLeft: "10px",
                            justifyContent: "center",
                          }}
                        >
                          <Typography variant="h4">Carbon Free</Typography>
                          <Box sx={{ display: "flex", marginTop: "2px" }}>
                            <Typography variant="h5">Atualização:</Typography>
                            <Typography
                              variant="h5"
                              style={{
                                color: colors.greenAccent[400],
                                marginLeft: "5px",
                              }}
                            >
                              Graphical User Interface
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Typography
                        variant="h5"
                        sx={{
                          marginTop: "10px",
                          textAlign: "justify",
                          padding: "0px 10px 0px 10px",
                        }}
                      >
                        Oi pessoal, estamos muito animados em compartilhar com
                        vocês a conclusão do design de telas do nosso programa!
                        Como um grupo, trabalhamos incansavelmente para criar
                        telas intuitivas e amigáveis para os usuários,
                        garantindo que todas as funcionalidades do programa
                        fossem fáceis de usar e acessíveis para todos. Durante o
                        processo de design, enfrentamos muitos desafios, mas
                        trabalhamos juntos para superá-los e chegar à conclusão
                        das telas. A colaboração e o trabalho em equipe foram
                        fundamentais para o sucesso do projeto, e estamos muito
                        orgulhosos do trabalho que realizamos até agora. A
                        conclusão do design de telas é um marco importante neste
                        projeto, e estamos ansiosos para continuar trabalhando
                        duro para alcançar nossa meta final e entregar um
                        programa incrível que atenda às expectativas de nossos
                        usuários. Agradecemos a todos os membros do grupo pelo
                        esforço e dedicação que investiram no projeto. Não
                        poderíamos ter chegado tão longe sem a contribuição de
                        cada um de vocês. Mal podemos esperar para compartilhar
                        o produto final com o mundo e ver as pessoas desfrutando
                        do nosso programa!
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "10px",
                        }}
                      >
                        <img
                          src={`/assets/gui.jpg`}
                          alt=""
                          style={{
                            objectFit: "cover",
                            width: "90%",
                            maxHeight: "300px",
                            borderRadius: "10px",
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          marginTop: "20px",
                        }}
                      >
                        <img
                          src={`/assets/elonmusk.jpeg`}
                          alt=""
                          style={{
                            objectFit: "cover",
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                          }}
                        />
                        <Box
                          sx={{
                            width: "89%",
                            display: "flex",
                            marginLeft: "10px",
                            backgroundColor: colors.primary[500],
                            borderRadius: "2px",
                          }}
                        >
                          <InputBase
                            placeholder="Adicionar um comentário..."
                            sx={{ flex: 1, ml: "10px" }}
                          />
                          <IconButton type="button">
                            <SendOutlinedIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        padding: "20px 10px 20px 10px",
                        borderRadius: "10px",
                        marginRight: "10px",
                        display: "grid",
                        width: "40%",
                        boxShadow: "0px 0px 16px -8px rgba(0,0,0,0.68)",
                        backgroundColor: colors.primary[400],
                        height: "150px"
                      }}>
                        <Box>
                          <Typography variant="h4">Parte do projeto:</Typography>
                          <Box sx={{marginLeft: "10px", marginTop: "5px"}}>
                            <Typography variant="h5">Design de telas</Typography>
                            <Box sx={{ display: "flex", alignItems: "center"}}>
                              <Box sx={{width:"70%"}}>
                                <LinearProgress variant="determinate" value={100} color="secondary"/>
                              </Box>
                              <Typography variant="h6" style={{marginLeft: "10px"}}>100%</Typography>
                            </Box>
                            <Box>
                              <Typography variant="h5">Status:</Typography>
                              <Typography variant="h5" style={{color: colors.greenAccent[400]}}>Entregue dentro do prazo</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                  </Box>
                </>
              )}
              {tabIndex === 2 && (
                <>
                  <Box>
                    <Box>
                      <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />} 
                      sx={{
                        "& .MuiStepIcon-active": {
                          backgroundColor: colors.blueAccent[500],
                        },
                        "& .MuiStepIcon-completed": { color: colors.greenAccent[400] },
                        "& .Mui-disabled .MuiStepIcon-root": { color: colors.blueAccent[500] },
                      }}
                      >
                        <Step>
                          <StepLabel>
                            Início do Projeto
                          </StepLabel>
                        </Step>
                        <Step>
                          <StepLabel>
                            Construção do Front-End
                          </StepLabel>
                        </Step>
                        <Step>
                          <StepLabel>
                            Construção do Back-End
                          </StepLabel>
                        </Step>
                        <Step>
                          <StepLabel>
                            Integração Back-End e Front-End
                          </StepLabel>
                        </Step>
                      </Stepper>
                    </Box>
                  </Box>
                </>
              )}
              {tabIndex === 3 && (
                <Box>
                  <Typography>Descrição</Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      {/*RIGHTBAR */}
      <Box sx={{ margin: "20px 10px 0px 20px" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">
              Assine o Plano Premium e ganhe vantagens!
            </Typography>
            <img
              src={`/assets/planopremium.png`}
              alt=""
              style={{
                width: "100%",
                maxHeight: "300px",
                borderRadius: "10px",
                marginTop: "10px",
              }}
            />
            <Button
              variant="contained"
              size="large"
              style={{
                backgroundColor: colors.primary[400],
                marginTop: "10px",
              }}
            >
              Assinar
            </Button>
          </Box>
          <Box sx={{ marginLeft: "20px" }}>
            <Typography variant="h4">On-line</Typography>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>RF</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">Rodrigo Franco</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>JM</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">João Matheus</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>JR</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">João Renan</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>FB</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">Fábio Barros</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>FA</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">Fábio Areas</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>LI</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">Luís Imhotep</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>KT</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">Kleberson Torres</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>AR</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">Adriana Rodrigues</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>LS</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">Luísa Santos</Typography>
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                  >
                    <Avatar>DC</Avatar>
                  </Badge>
                </ListItemAvatar>
                <Typography variant="h5">Denilson Chaves</Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
