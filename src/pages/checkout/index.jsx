import { Header } from "../../components/header";
import { MapPin, ShoppingCart, CircleDollarSign } from "lucide-react";
import "./style.css";

export function Checkout() {
  return (
    <>
      <Header />
      <form>
        <h2>Endereço de Entrega</h2>

        <input type="text" placeholder="CEP" />

        <input type="text" placeholder="Rua" />

        <input type="number" placeholder="Número" />

        <input type="text" placeholder="Complemento" />

        <input type="text" placeholder="Bairro" />

        <input type="text" placeholder="Cidade" />

        <input type="text" placeholder="UF" />
      </form>

      <form>
        <CircleDollarSign></CircleDollarSign>
        <h2>Pagamento</h2>
        <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>

        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="switch">
                <input
                  id="switch-y"
                  name="tripple"
                  type="radio"
                  value="Y"
                  class="switch-input"
                />
                <label for="switch-y" class="switch-label switch-label-y">
                  Yes
                </label>
                <input
                  id="switch-i"
                  name="tripple"
                  type="radio"
                  value="I"
                  class="switch-input"
                  checked
                />
                <label for="switch-i" class="switch-label switch-label-i">
                  Inherit
                </label>
                <input
                  id="switch-n"
                  name="tripple"
                  type="radio"
                  value="N"
                  class="switch-input"
                />
                <label for="switch-n" class="switch-label switch-label-n">
                  No
                </label>
                <span class="switch-selector"></span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
