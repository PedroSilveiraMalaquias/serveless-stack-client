import React, {useEffect } from "react";
import { useAppContext } from "../libs/contextLib";
import "./ReiMinion.css";
export default function Home() {
  const { isAuthenticated } = useAppContext();
  useEffect(() =>[isAuthenticated]);
  return (
    <div className="Home">      
     <div className="lander">
        <div class="container">
          <div class="row">
            <div class="col-5">
              <img src="Rei-Minion.png" alt="" class="img-thumbnail"/>
            </div>
            <div class="col">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Rei Minion</h1>
                            <p class="text-left">O rei minion adora mandar. Adquira agora mesmo e coloque ordem no seu reino, digo, na sua coleção!</p>
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