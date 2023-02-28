import React from "react";
import "./Rules.css";
import Footer from "../../Components_hub/Footer/Footer";

const Rules = () => {
  return (
    <div>
      <header>
        <h1>Hostel Rules and Regulations</h1>
        <p>
          Please read the following rules and regulations carefully. Violation
          of any of these rules may result in penalties.
        </p>
      </header>
      <main>
        <section>
          <h2>Room Rules</h2>
          <ul>
            <li>Rooms must be kept clean and tidy at all times.</li>
            <li>No cooking or heating appliances are allowed in the rooms.</li>
            <li>
              No smoking or alcohol is allowed in the rooms or anywhere in the
              hostel premises.
            </li>
            <li>
              Visitors are not allowed in the rooms without prior permission
              from the hostel warden.
            </li>
            <li>No loud music or noise is allowed in the rooms after 10 pm.</li>
          </ul>
        </section>
        <section>
          <h2>Mess Rules</h2>
          <ul>
            <li>All meals must be consumed in the mess hall.</li>
            <li>
              No food or utensils are allowed to be taken out of the mess hall.
            </li>
            <li>No outside food or drinks are allowed in the mess hall.</li>
            <li>Meals will be served at the specified times only.</li>
            <li>Any food wastage will result in a penalty.</li>
          </ul>
        </section>
        <section>
          <h2>Meeting Timings</h2>
          <table>
            <tr>
              <th>Day</th>
              <th>Time</th>
            </tr>
            <tr>
              <td>Monday</td>
              <td>6 pm - 8 pm</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>4 pm - 6 pm</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>3 pm - 5 pm</td>
            </tr>
          </table>
        </section>
        <section>
          <h2>Violations and Penalties</h2>
          <p>
            Violations of the hostel rules and regulations will result in
            penalties as follows:
          </p>
          <ul>
            <li>First offense - warning</li>
            <li>Second offense - fine of Rs. 500</li>
            <li>Third offense - suspension from hostel for a week</li>
            <li>Fourth offense - expulsion from hostel</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
    
  );
};

export default Rules;
