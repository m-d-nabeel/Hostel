import React from 'react';
import './Fee.css';
import Footer from '../../Components_hub/Footer/Footer';

const Fee = () => {
    return (
    <div>
        <header>
			<h1>Hostel Fee Structure</h1>
		</header>
		<main>
			<section>
				<h2>Hostel Charges</h2>
				<table>
					<tr>
						<th>Room Type</th>
						<th>Charge Per Semester</th>
					</tr>
					<tr>
						<td>Single Room</td>
						<td>$1500</td>
					</tr>
					<tr>
						<td>Double Room</td>
						<td>$1200</td>
					</tr>
					<tr>
						<td>Triple Room</td>
						<td>$900</td>
					</tr>
				</table>
			</section>
			<section>
				<h2>Mess Charges</h2>
				<table>
					<tr>
						<th>Meal Plan</th>
						<th>Charge Per Semester</th>
					</tr>
					<tr>
						<td>Standard Meal Plan</td>
						<td>$800</td>
					</tr>
				</table>
			</section>
			<section>
				<h2>Other Charges</h2>
				<ul>
					<li>Application Fee: $50 (one-time)</li>
					<li>Security Deposit: $200 (refundable)</li>
					<li>Late Payment Fee: $50 (per week)</li>
					<li>Lost Key Replacement Fee: $20</li>
				</ul>
			</section>
		</main>
        <Footer />
    </div>
    );
}

export default Fee;