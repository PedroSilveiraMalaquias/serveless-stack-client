import React, {useEffect } from "react";
import { useAppContext } from "../libs/contextLib";
import "./MinionBombeiro.css";
export default function Home() {
  const { isAuthenticated } = useAppContext();
  useEffect(() =>[isAuthenticated]);
  return (
    <div className="Home">      
     <div className="lander">
        <div class="container">
          <div class="row">
            <div class="col-5">
             <img src="Minion-Bombeiro.png" alt=""  class="img-thumbnail"/>
            </div>
            <div class="col">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Minion Bombeiro</h1>
                            <p class="text-left">O minion bombeiro é o herói da sua coleção. Sempre a postos para resolver qualquer incidente que os outros minions arranjarem ao mexerem com fogo.</p>
                            <p class="text-left"><strong>Altura:</strong> 5cm</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                          <h2><p class="text-left">R$ 9,99</p></h2>
                          <div class="alert alert-primary"  role="alert">
                            Produto disponível. Reserve agora mesmo!
                          </div>
                          {isAuthenticated ?  
                          <a class="btn btn-success btn-lg btn-block" href="/settings" role="button"><strong>Comprar</strong></a> :  
                          <a class="btn btn-success btn-lg btn-block" href="/login" role="button"><strong>Comprar</strong></a>
                          }
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}