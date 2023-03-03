import React from "react";
import "./SeatAlloc.css";

const SeatAlloc = () => {
  return (
    <>
    <div>
      <header>
		       <h1>Hostel Seat Allotment</h1>
	    </header>
	  <main className="seat-box">
		<form>
			<label for="hostel">Select Hostel:</label>
			<select id="hostel" name="hostel">
				<option value="hostel1">Hostel 1</option>
				<option value="hostel2">Hostel 2</option>
				<option value="hostel3">Hostel 3</option>
			</select>
			<br/>
			<label for="room">Select Room:</label>
			<select id="room" name="room">
				<option value="room1">Room 1</option>
				<option value="room2">Room 2</option>
				<option value="room3">Room 3</option>
			</select>
			<br/>
			<input type="submit" value="Submit"/>
		</form>
	</main>
    </div>
    </>
  );
};

export default SeatAlloc;
