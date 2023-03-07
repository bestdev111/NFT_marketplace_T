import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Modal = (props) => {
  const [num, setNum] = useState(null);
  const [data, setData] = useState({});
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setNum(props.selectedArt);
    setData(props.data);
  }, [props.data, props.selectedArt]);

  const handleClose = () => {
    props.modalClose(false);
  };

  const artBuy = () => {
    props.modalClose(false);
    window.location.href = "https://opensea.io";
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={props.open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <>
        <DialogTitle id="responsive-dialog-title">
          {data ? data.title : ""}
          {" #"}
          {num}
        </DialogTitle>
        <DialogContent>
          <div className="d-flex p-10">
            <img className="customImg" src={data ? data.url : ""} alt="NFT" />
            <div className="overflow">
              <label defaultValue="owner_address" />
              <p className="white-space">
                Owner Address: 0x26355474940470979a65Baa28C8C7fa8E4edBA1B
              </p>
              <p className="white-space">
                Price :{data ? data.price : ""}
                {" ETH"}
              </p>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={artBuy}>
            Purchase
          </Button>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </>
    </Dialog>
  );
};

export default Modal;
