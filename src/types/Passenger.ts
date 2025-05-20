type Passenger = {
  id: number;
  type: "Adult" | "Child" | "Infant";
  title?: "Mr" | "Mrs";
  firstName?: string;
  lastName?: string;
  dob?: Date | string;
};

export default Passenger;
