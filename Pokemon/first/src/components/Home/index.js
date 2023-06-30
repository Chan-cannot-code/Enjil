import React from "react";
import CustomNav from "../CustomNav";
import { userData } from "../../helpers";
import PokemonThumbnail from "../PokemonThumbnail";
import Description from "../Description";

const Home = () => {
  const { username } = userData();

  return (
    <div>
      <CustomNav />
      <div className="greetuser">
        <h5> Wélcome, {username}!</h5>
        <div className="pokemon-container">
          {/* Render PokemonThumbnail components */}
          
          
        </div>
      </div>
    </div>
  );
};

export default Home;
