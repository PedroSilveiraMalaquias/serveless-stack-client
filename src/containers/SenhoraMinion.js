import React, {useEffect } from "react";
import { useAppContext } from "../libs/contextLib";
import "./SenhoraMinion.css";
export default function Home() {
  const { isAuthenticated } = useAppContext();
  useEffect(() =>[isAuthenticated]);
  return (
    <div className="Home">      
     <div className="lander">
        <div class="container">
          <div class="row">
            <div class="col-5">
              <img src="Senhora-minion.png" alt="" class="img-thumbnail"/>
            </div>
            <div class="col">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h1>Senhora Minion</h1>
                            <p class="text-left">A Senhora Minion sempre muito vaidosa chega em grande estilo para completar a sua coleção, adicionando muito charme e elegância ao grupo dos seus colecionáveis.</p>
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