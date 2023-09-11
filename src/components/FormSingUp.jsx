import { useState } from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material";
import FormControlLabel from "@mui/material";

function FormSingUp() {

  const [name, setName] = useState("")
  return (
    <form>
      <TextField id="name" label="Nombre" variant="outlined" margin="normal"></TextField>
      <TextField id="LastName" label="Apellidos" variant="outlined" margin="normal"></TextField>
      <TextField id="Email" label="Email" variant="outlined" margin="normal"></TextField>
      <FormGroup>
        <FormControlLabel control={
            <Switch defaultChecked/>
        } label="Promociones"/>
      <Switch defaultChecked/>
      <label>Novedades</label>
      <input type="checkbox" />
      </FormGroup>
      <Button variant="contained">Registrarse</Button>
    </form>
  );
}

export default FormSingUp;
