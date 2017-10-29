import React from 'react';
import Collapsible from '../components/Collapsible';
import './Basics.css';
import { Helmet } from 'react-helmet';
import imgWaterCycle from '../images/the-water-cycle.jpg';

const Basics = props => {
  return (
    <main className="basics-container scroll-container">
      <Helmet>
        <title>Texas Water Basics</title>
      </Helmet>
      <h1>Texas Water Basics</h1>
      <h2>The Water Cycle</h2>
      <p>Water is constantly in flux, changing phases between liquid, vapor and ice. Evaporation occurs as the sun heats water, transforming it from liquid to vapor. As this vapor rises, it condenses into clouds. Clouds can circulate the globe, depositing water molecules—by way of precipitation—thousands of miles from where they originated. This precipitation can be in the form of snow or rain. If snow falls in warmer climates, it often thaws and flows over land as surface runoff, just like rain. Runoff moves down slope, first into valleys where it reaches streams and rivers, and eventually to lakes or oceans. However, not all runoff ends up in a stream or river. Much of it soaks into the ground, percolating through sand, soil and rocks. Eventually, this water reaches an aquifer, a natural reservoir that stores large amounts of freshwater underground.</p>
      <img src={imgWaterCycle} alt="Graphic: Water Cycle" />
      <p>Groundwater and surface water are often connected – water from the surface infiltrates into the ground and groundwater water replenishes water in rivers and lakes. Due to this connection, over-pumping of groundwater can decrease water levels in streams and lakes. Overuse of surface water can lower groundwater levels and ultimately decrease the amount of water in lakes, rivers and streams. This also has implications for bays and estuaries (where freshwater meets saltwater); they are dependent on river flows to keep salinity levels low and native plants and animals healthy. </p>
      <h1>Texas Water Glossary</h1>
      <Collapsible
        trigger="Where is the Water?"
      >
        <p><strong>Aquifer</strong> - A layer of underground rock that is able to hold water due to its permeable nature, meaning liquids and gases can pass through. Aquifers fill with water from rain or snowmelt and act as reservoirs for groundwater. Texas has nine major aquifers (defined as aquifers producing large quantities of water in large areas of the state) and 21 minor aquifers (defined as aquifers producing large quantities of water in small areas or small quantities of water over large areas).</p>
        <p><strong>Estuary</strong> - A body of water where a river meets the sea, resulting in the mixture of freshwater and saltwater.</p>
        <p><strong>Reservoir</strong> - A natural or artificially created body of water (above or below ground) used as a freshwater supply source.</p>
        <p><strong>River basin</strong> - The area of land that water flows across on its way to a river or stream. A sub-basin is a smaller section within a larger river basin. There are 15 major river basins in Texas and eight minor coastal basins.</p>
        <p><strong>River network patch</strong> - An area of a river that is homogenous within its boundaries but unlike the surrounding areas. These patches can vary in shape and size and differ as a result of runoff, vegetation, geology and flows.</p>
        <p><strong>Watershed</strong> - An area of land, often separated by ridges or other high points, that drains all of the streams, rainfall and snowmelt.</p>
      </Collapsible>    
      <Collapsible
        trigger="Using Water"
      >
        <p><strong>Water use</strong> - The use of water by humans. In Texas, freshwater from rivers, aquifers, lakes, and reservoirs is used for a variety of purposes. TWDB (see definition above) collects an annual water use survey that breaks down water use by sector. These sectors include municipal, manufacturing, stream-electric power, mining, livestock, and irrigated agriculture. Read more about (annual water use estimates). Water use is often also broken into two categories: consumptive use and non-consumptive use.</p>
        <p><strong>Consumptive water use</strong> - Water removed from the water system that is “used up” and does not return. Example: the water that evaporates or is transpired by grass when you water your lawn and does not percolate through the soil to return to the river or aquifer.</p>
        <p><strong>Non-consumptive water use</strong> - Water that either remains in the water system or is withdrawn from a surface or groundwater source, but returns to the water system. Example: the water that is pumped from a river to cool a power plant and is subsequently returned to the river.</p>
        <p><strong>Water withdrawal</strong> - Water that is diverted from a surface water source, such as a stream or reservoir, or pumped from groundwater.</p>
      </Collapsible>    
      <Collapsible
        trigger="Water Law"
      >
        <p><strong>Water rights</strong> - Defined by Texas Water Code Sec. 11.002 as “a right acquired under the laws of this state to impound, divert or use state water.” In Texas, surface water belongs to the state and can be used by landowners with the state’s permission (a “water right”) while groundwater belongs to the owner of the land above it.</p>
        <p><strong>Prior Appropriation</strong> - A legal doctrine pertaining to surface water defined as “first in time, first in right.” A person who receives a permit to put water to beneficial use has a water right senior to those who receive a permit subsequently. During water shortages, those with more senior water rights will receive all of the water to which they are entitled before junior rights holders receive their entitlement.</p>
        <p><strong>Riparian Doctrine</strong> - A legal doctrine that states water rights are associated with the land bordering a river, stream, pond or lake and owners of that land have a right to that water for reasonable use. In 1967 the Texas Legislature merged the riparian rights system into the prior appropriation system, consolidating surface water rights into one system.</p>
        <p><strong>Beneficial use</strong> - Defined by Texas Water Code Sec. 11.002 as “use of the amount of water which is economically necessary… when reasonable intelligence and reasonable diligence are used in applying the water to that purpose and shall include conserved water.” Beneficial use includes domestic, municipal, agricultural, industrial, mining, hydroelectric power, navigation, recreation, public parks and game preserves, among other things.</p>
        <p><strong>Rule of Capture</strong> - A legal doctrine pertaining to groundwater that gives landowners the right to pump the available water beneath their property for beneficial use without acquiring a water right, regardless of the effects that pumping has on neighboring wells.`</p>
        <p><strong>Senate Bill 3 (SB3)</strong> - A bill that establishes a process for determining environmental flow standards for all of the major river basins and bay systems in Texas. The process was designed to be accelerated, scientific and stake-holder driven. The SB3 process is designed to address three major questions: (1) How much water is needed to sustain a sound ecological environment in the state's rivers and estuaries? (2) How can this water be protected? (3) What is the appropriate balance between water needed to sustain a sound ecological environment and water needed for human and/or or other uses?</p>
        <p><strong>303(d) listing</strong> - 303(d) is a section of the Clean Water Act that requires states to submit lists of impaired bodies of waters to the Environmental Protection Agency. Waterbodies are considered impaired if they do not meet state water quality standards. The law requires that states develop Total Maximum Daily Loads (TMDL) for pollutants in these waterbodies.</p>
        <p><strong>Endangered Species Act</strong> - An act passed by Congress in 1973 to protect and recover species at risk of extinction, as well as their habitat.</p>
      </Collapsible>      
    </main>
  )
}


export default Basics;