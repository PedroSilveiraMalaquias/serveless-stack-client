import React, {useEffect } from "react";
import { useAppContext } from "../libs/contextLib";
import "./MinionDonoDaLua.css";
export default function Home() {
  const { isAuthenticated } = useAppContext();
  useEffect(() =>[isAuthenticated]);
  return (
    <div className="Home">      
     <div className="lander">
        <div class="container">
          <div class="row">
            <div class="col-5">
             <img src="Minion-dono-da-lua.png" alt=""  class="img-thumbnail"/>
            </div>
            <div class="col">
                <div class="container">
                    <div class="row">
                        <div class="col">
                           <h1>Minion dono da lua</h1>
                            <p class="text-left">O minion dono da lua adora causar uma confusão e cria planos mirabolantes para conseguir que a lua seja sua. Ele vai adicionar um toque de diversão à sua coleção.</p>
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