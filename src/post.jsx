export function Post(props) {
  console.log(props);
  return (
    // POST
    // bg- white = background: white
    //rounded-lg = border-radius: 0.5rem;
    // shadow-md
    // p-8 = padding: 2 rem          (1 = 0.25rem, 8*0.25 = 2 rem )
    //mb-6 = margin-bottom:1.5rem    (1 = 0.25rem, 8*0.25 = 2 rem )
    <div className="bg-white rounded-lg shadow-md p-8 mb-6">
      <strong className="block text-lg font-semibold mb-2"></strong>
      <h1 className="text-xl">{props.author}</h1>
      <p className="text-gray-700">{props.content}</p>
    </div>
  );
}
