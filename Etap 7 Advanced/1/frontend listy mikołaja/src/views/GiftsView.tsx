import React from "react";
import {GiftsList} from "../components/Gifts/GiftsList";
import {AddGift} from "../components/AddGifts/AddGifts";
import {Link} from "react-router-dom";

export const GiftsView = () => (
  <>
    <GiftsList/>
    <AddGift/>
    <Link to="/tests">Przełącz do Tests!</Link>
  </>
)