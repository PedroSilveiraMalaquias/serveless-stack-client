import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import "./MinionGuarda.css";
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

  

  function direcionaCompra() {
    return (
         <div className="lander">
        <div class="container">
          <div class="row">
            <div class="col-5">
              <img src="Minion-Guarda-Real.png"  class="img-thumbnail"/>
            </div>
            <div class="col">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Minion Guarda Real</h1>
                            <p class="text-left">Um divertido minion guarda real britânico em miniatura. Diversão para as crianças, adquira agora mesmo o seu colecionável!!</p>
                            <p class="text-left"><strong>Altura:</strong> 5cm</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <h2><p class="text-left">R$ 9,99</p></h2>
                        <div class="alert alert-primary" role="alert">
                         Produto disponível. Reserve agora mesmo!
                        </div>
                        <a class="btn btn-success" href="/settings" role="button"><strong>Comprar</strong></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
       
      </div>
      
    );
  }

  function direcionaLogin() {
   return (
         <div className="lander">
        <div class="container">
          <div class="row">
            <div class="col-5">
              <img src="Minion-Guarda-Real.png"  class="img-thumbnail"/>
            </div>
            <div class="col">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Minion Guarda Real</h1>
                            <p class="text-left">Um divertido minion guarda real britânico em miniatura. Diversão para as crianças, adquira agora mesmo o seu colecionável!!</p>
                            <p class="text-left"><strong>Altura:</strong> 5cm</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        <h2><p class="text-left">R$ 9,99</p></h2>
                        <div class="alert alert-primary" role="alert">
                         Produto disponível. Reserve agora mesmo!
                        </div>
                        <a class="btn btn-success" href="/login" role="button"><strong>Comprar</strong></a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
        
       
      </div>
      
    );
  }

  return (
    <div className="Home">
      {isAuthenticated ? direcionaCompra() : direcionaLogin()}
    </div>
  );
}