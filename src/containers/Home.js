import React, { useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppContext } from "../libs/contextLib";
import "./Home.css";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
  const { isAuthenticated } = useAppContext();
  useEffect(() =>[isAuthenticated]);
  
  return (
      <div className="lander">
        <div class="container">
          <div class="row" >
            <div class="col">
               <>
                <LinkContainer to="/MinionGuarda">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Minion-Guarda-Real.png" alt="Card cap"/>
                    <div class="card-body">
                      <div class="row">
                        <span className="mx-auto font-weight-bold">Minion Guarda Real</span>
                      </div>
                      <div class="row">
                        <span className="mx-auto font-weight-bold">R$ 9,99</span>
                      </div>
                    </div>
                  </div>
                  </ListGroup.Item>
                </LinkContainer>
               </>
            </div>
            <div class="col">
              
              <>
                <LinkContainer to="/ReiMinion">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Rei-Minion.png" alt="Card cap"/>
                    <div class="card-body">
                      <div class="row">
                        <span className="mx-auto font-weight-bold">Rei Minion</span>
                      </div>
                      <div class="row">
                        <span className="mx-auto font-weight-bold">R$ 9,99</span>
                      </div>
                    </div>
                  </div>
                  </ListGroup.Item>
                </LinkContainer>
               </>
              
            </div>
            <div class="col">
               <>
                <LinkContainer to="/MinionBombeiro">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Minion-Bombeiro.png" alt="Card cap"/>
                    <div class="card-body">
                      <div class="row">
                        <span className="mx-auto font-weight-bold">Minion Bombeiro</span>
                      </div>
                      <div class="row">
                        <span className="mx-auto font-weight-bold">R$ 9,99</span>
                      </div>
                    </div>
                  </div>
                  </ListGroup.Item>
                </LinkContainer>
               </>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col">
              <br></br>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
               <>
                <LinkContainer to="/MinionDePijama">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Minion-de-pijama.png" alt="Card cap"/>
                    <div class="card-body">
                      <div class="row">
                        <span className="mx-auto font-weight-bold">Minion de pijama</span>
                      </div>
                      <div class="row">
                        <span className="mx-auto font-weight-bold">R$ 9,99</span>
                      </div>
                    </div>
                  </div>
                  </ListGroup.Item>
                </LinkContainer>
               </>
            </div>
            <div class="col">
               <>
                <LinkContainer to="/MinionDonoDaLua">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Minion-dono-da-lua.png" alt="Card cap"/>
                    <div class="card-body">
                      <div class="row">
                        <span className="mx-auto font-weight-bold">Minion dono da lua</span>
                      </div>
                      <div class="row">
                        <span className="mx-auto font-weight-bold">R$ 9,99</span>
                      </div>
                    </div>
                  </div>
                  </ListGroup.Item>
                </LinkContainer>
               </>
            </div>
            <div class="col">
               <>
                <LinkContainer to="/SenhoraMinion">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Senhora-minion.png" alt="Card cap"/>
                    <div class="card-body">
                      <div class="row">
                        <span className="mx-auto font-weight-bold">Senhora Minion</span>
                      </div>
                      <div class="row">
                        <span className="mx-auto font-weight-bold">R$ 9,99</span>
                      </div>
                    </div>
                  </div>
                  </ListGroup.Item>
                </LinkContainer>
               </>
            </div>
          </div>
        </div> 
       
      </div>
    );
}