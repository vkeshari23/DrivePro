// import { useEffect, useState } from "react";

const campaignData = [
  {
    campaign: "Shampoo Basic",
    clicks: 723,
    cost: 332,
    conversions: 1,
    revenue: 32,
  },
  {
    campaign: "Serums Advanced",
    clicks: 719,
    cost: 5325,
    conversions: 2,
    revenue: 3423,
  },
  {
    campaign: "Cosmetics Premium",
    clicks: 712,
    cost: 838,
    conversions: 3,
    revenue: 34344,
  },
  {
    campaign: "Facewash Regular",
    clicks: 711,
    cost: 9993,
    conversions: 5,
    revenue: 4323,
  },
  {
    campaign: "Facewash Plus",
    clicks: 253,
    cost: 3435,
    conversions: 5,
    revenue: 23434,
  },
  {
    campaign: "Cosmetics Basic",
    clicks: 713,
    cost: 998,
    conversions: 8,
    revenue: 16568,
  },
  {
    campaign: "Hair Oil Treatment",
    clicks: 892,
    cost: 2456,
    conversions: 12,
    revenue: 8901,
  },
  {
    campaign: "Anti-Aging Cream",
    clicks: 654,
    cost: 1876,
    conversions: 7,
    revenue: 5432,
  },
  {
    campaign: "Sunscreen SPF50",
    clicks: 789,
    cost: 3210,
    conversions: 15,
    revenue: 12789,
  },
  {
    campaign: "Body Lotion",
    clicks: 567,
    cost: 1234,
    conversions: 4,
    revenue: 3456,
  },
  {
    campaign: "Eye Cream",
    clicks: 432,
    cost: 2345,
    conversions: 6,
    revenue: 7890,
  },
  {
    campaign: "Lip Care",
    clicks: 345,
    cost: 987,
    conversions: 3,
    revenue: 2345,
  },
  {
    campaign: "Hand Cream",
    clicks: 678,
    cost: 1543,
    conversions: 9,
    revenue: 6789,
  },
  {
    campaign: "Foot Cream",
    clicks: 234,
    cost: 876,
    conversions: 2,
    revenue: 1543,
  },
  {
    campaign: "Body Scrub",
    clicks: 567,
    cost: 2134,
    conversions: 8,
    revenue: 5678,
  },
  {
    campaign: "Face Mask",
    clicks: 890,
    cost: 3456,
    conversions: 11,
    revenue: 9012,
  },
  {
    campaign: "Toner Basic",
    clicks: 345,
    cost: 1234,
    conversions: 4,
    revenue: 3456,
  },
  {
    campaign: "Moisturizer Plus",
    clicks: 678,
    cost: 2345,
    conversions: 7,
    revenue: 6789,
  },
  {
    campaign: "Night Cream",
    clicks: 432,
    cost: 1876,
    conversions: 5,
    revenue: 4321,
  },
  {
    campaign: "Acne Treatment",
    clicks: 567,
    cost: 2987,
    conversions: 9,
    revenue: 7654,
  },
  {
    campaign: "Hair Mask",
    clicks: 789,
    cost: 3210,
    conversions: 13,
    revenue: 10987,
  },
  {
    campaign: "Hair Serum",
    clicks: 456,
    cost: 1765,
    conversions: 6,
    revenue: 5432,
  },
  {
    campaign: "Body Wash",
    clicks: 678,
    cost: 2345,
    conversions: 8,
    revenue: 7654,
  },
  {
    campaign: "Face Serum",
    clicks: 890,
    cost: 4321,
    conversions: 14,
    revenue: 12345,
  },
  {
    campaign: "Eye Serum",
    clicks: 345,
    cost: 1654,
    conversions: 5,
    revenue: 4321,
  },
  {
    campaign: "Lip Balm",
    clicks: 567,
    cost: 987,
    conversions: 3,
    revenue: 2345,
  },
  {
    campaign: "Hand Sanitizer",
    clicks: 789,
    cost: 1543,
    conversions: 7,
    revenue: 6543,
  },
  {
    campaign: "Foot Scrub",
    clicks: 234,
    cost: 876,
    conversions: 2,
    revenue: 1765,
  },
  {
    campaign: "Body Oil",
    clicks: 567,
    cost: 2134,
    conversions: 8,
    revenue: 6543,
  },
  {
    campaign: "Face Oil",
    clicks: 890,
    cost: 3456,
    conversions: 12,
    revenue: 10987,
  },
  {
    campaign: "Hair Color",
    clicks: 456,
    cost: 2345,
    conversions: 6,
    revenue: 5678,
  },
  {
    campaign: "Shampoo Plus",
    clicks: 678,
    cost: 1987,
    conversions: 9,
    revenue: 8765,
  },
  {
    campaign: "Conditioner Basic",
    clicks: 890,
    cost: 3210,
    conversions: 11,
    revenue: 9876,
  },
  {
    campaign: "Hair Spray",
    clicks: 345,
    cost: 1234,
    conversions: 4,
    revenue: 3456,
  },
  {
    campaign: "Dry Shampoo",
    clicks: 567,
    cost: 1876,
    conversions: 7,
    revenue: 6543,
  },
  {
    campaign: "BB Cream",
    clicks: 789,
    cost: 2987,
    conversions: 10,
    revenue: 8765,
  },
  {
    campaign: "CC Cream",
    clicks: 456,
    cost: 1765,
    conversions: 5,
    revenue: 4321,
  },
  {
    campaign: "Foundation",
    clicks: 678,
    cost: 2345,
    conversions: 8,
    revenue: 7654,
  },
  {
    campaign: "Mascara",
    clicks: 890,
    cost: 3456,
    conversions: 13,
    revenue: 11234,
  },
  {
    campaign: "Eyeliner",
    clicks: 345,
    cost: 1543,
    conversions: 4,
    revenue: 3456,
  },
];

import { useEffect, useState } from 'react';
import './Comp1.css'

export default function Comp1() {

    
    
        // let sortByCompNameAsc=()=>{
        //     campaignData.sort((a,b)=> a.campaign>b.campaign?1:-1)
        
        // } 
        // let sortByCompNameDes= ()=>{
        //     campaignData.sort((a,b)=> b.campaign>a.campaign?1:-1)}



    const [sortData,setSortData]= useState(false)
    let asc=()=>{
        setSortData(true)
    }
    



    // let clicks= campaignData.sort((a,b)=> a-b)
    // let cost= campaignData.sort((a,b)=>a-b)
    // const conversions= campaignData.sort((a,b)=>a-b)
    // const revenue= conversions.sort((a,b)=>a-b)

  return (
    <div>
      <table>
        <thead>
          <th> Campaign Name {sortData?<button>Asc</button>:<button>Des</button>}</th>
          <th>Clicks </th>
          <th>Cost (in USD) </th>
          <th>Conversions </th>
          <th>Revenue (in USD) </th>

        </thead>
        <tbody>
          {campaignData.map((e, i) => (
            <tr key={i}>
              <td>{e.campaign}</td>
              <td>{e.clicks}</td>
              <td>{e.cost}</td>
              <td>{e.conversions}</td>
              <td>{e.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
