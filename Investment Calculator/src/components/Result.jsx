import { calculateInvestmentResults, formatter } from "../util/investment.js";
export default function Result({ investments }) {

  const retrievedData = calculateInvestmentResults(investments);

  let calculatedInterest = 0;

  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {retrievedData.map((interestPerYear, i) => (
            <tr key={i}>
              <td>{interestPerYear.year}</td>
              <td>{formatter.format(interestPerYear.valueEndOfYear)}</td>
              <td>{formatter.format(interestPerYear.interest)}</td>
              <td>
                {formatter.format(
                  (calculatedInterest += interestPerYear.interest)
                )}
              </td>
              <td>
                {formatter.format(
                  interestPerYear.valueEndOfYear - interestPerYear.interest
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {console.log(retrievedData)}
    </>
  );
}
