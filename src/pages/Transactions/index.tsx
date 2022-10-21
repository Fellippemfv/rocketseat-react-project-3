import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHightlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />

           <TransactionsContainer>
                <SearchForm />

                <TransactionsTable>
                        <tbody>
                            <tr>
                                <td width="50%">Desenvolvimento do site</td>
                                <td>
                                    <PriceHightlight variant="income">
                                    R$ 12.000,00
                                    </PriceHightlight>
                                </td>
                                <td>Venda</td>
                                <td>20/10/2022</td>
                            </tr>

                            <tr>
                                <td width="50%">Coxinha</td>
                                <td>
                                    <PriceHightlight variant="outcome">
                                        - R$ 59,00
                                    </PriceHightlight>
                                </td>
                                <td>Alimentação</td>
                                <td>15/10/2022</td>
                            </tr>
                        </tbody>
                </TransactionsTable>
           </TransactionsContainer>
        </div>
    )
}