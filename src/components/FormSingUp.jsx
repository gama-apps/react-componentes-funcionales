import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function FormSingUp() {
  return (
    <form>
      <label>Nombre</label>
      <input type="text" />
      <TextField id="name" label="Nombre" variant="outlined" margin="normal"></TextField>
      <TextField id="LastName" label="Apellidos" variant="outlined" margin="normal"></TextField>
      <TextField id="Email" label="Email" variant="outlined" margin="normal"></TextField>
      <label>Apelidos</label>
      <input type="text" />
      <label>Correo Electronico</label>
      <input type="email" />
      <label>Promociones</label>
      <input type="checkbox" />
      <label>Novedades</label>
      <input type="checkbox" />
      <Button variant="contained">Registrarse</Button>
    </form>
  );
}

export default FormSingUp;
