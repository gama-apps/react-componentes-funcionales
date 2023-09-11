import './App.css';
import FormSingUp from './components/FormSingUp';

function App() {

  const handleSubmit = (valores) => {
    console.log('APPJS: ', valores)
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Formulario Registro</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;