export default function getValidationErrors (err) {
  const validationsErrors = {};

  // percorre os erros apresentados no catch e faz o retorno em forma de objeto  
  err.inner.forEach(error => {
    validationsErrors[error.path] = error.message;
  });

  return validationsErrors;
}