"use server";

import { Card } from "@/components/ui";
import { Option } from "@/components/form";
import locations from "@/public/data/locations";
// import locations from "../../../public/data/locations";

// probably should be a type
interface Location {
  city: string;
  country: string;
  code: string;
}

export default async function Locations() {
  return (
    <>
      {locations.map((location: Location) => (
        <Option
          key={location.code}
          header={`${location.city} - ${location.code}`}
          caption={location.country}
        />
      ))}
    </>
    // <span style={{ position: "absolute", top: "12px", left: "0px", width: "500px" }}>
    //   <Card>
    //     {locations.map((location: Location) => (
    //       <Option
    //         key={location.code}
    //         header={`${location.city} - ${location.code}`}
    //         caption={location.country}
    //       />
    //     ))}
    //   </Card>
    // </span>
  );
}

// export default async function Locations() {
//   return (
//     <span style={{ position: "absolute", top: "12px", left: "0px", width: "500px" }}>
//       <Card>
//         {locations.map((location: Location) => (
//           <Option
//             key={location.code}
//             header={`${location.city} - ${location.code}`}
//             caption={location.country}
//           />
//         ))}
//       </Card>
//     </span>
//   );
// }
