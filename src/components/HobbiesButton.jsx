export default function HobbiesButton() {
  return (
    <button
      className="btn btn--ghost"
      type="button"
      onClick={() => alert("Luego conectamos aquí los 3 temas (Standard / Football / Gaming) 😄")}
      aria-label="Cambiar tema por hobbies"
    >
      Hobbies
    </button>
  );
}
