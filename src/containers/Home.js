import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./Home.css";
import { API } from "aws-amplify";
import { BsPencilSquare } from "react-icons/bs";
import { LinkContainer } from "react-router-bootstrap";

export default function Home() {
  
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function onLoad() {
      if (!isAuthenticated) {
        return;
      }
  
      try {
        const notes = await loadNotes();
        setNotes(notes);
      } catch (e) {
        onError(e);
      }
  
      setIsLoading(false);
    }
  
    onLoad();
  }, [isAuthenticated]);
  
  function loadNotes() {
    return API.get("notes", "/notes");
  }

  return (
      <div className="lander">
        <div class="container">
          <div class="row" >
            <div class="col">
               <>
                <LinkContainer to="/MinionGuarda">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Minion-Guarda-Real.png" alt="Card image cap"/>
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
                    <img class="card-img-top" src="Rei-Minion.png" alt="Card image cap"/>
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
                    <img class="card-img-top" src="Minion-Bombeiro.png" alt="Card image cap"/>
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
                <LinkContainer to="/MinionGuarda">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Minion-de-pijama.png" alt="Card image cap"/>
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
                <LinkContainer to="/MinionGuarda">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Minion-dono-da-lua.png" alt="Card image cap"/>
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
                <LinkContainer to="/MinionGuarda">
                  <ListGroup.Item action className="py-3">
                 <div class="card">
                    <img class="card-img-top" src="Senhora-minion.png" alt="Card image cap"/>
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