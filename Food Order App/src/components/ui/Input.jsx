export default function Input({label, ...props}){
    return <p className="control">
    <label>{label}</label>
    <input {...props} />
  </p>
}