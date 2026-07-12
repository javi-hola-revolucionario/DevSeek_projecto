function Message({ role, content }) {
  return (
    <div
      className={`p-3 my-2 rounded-lg ${
        role === "user"
          ? "bg-blue-500 text-white ml-auto"
          : "bg-gray-200 text-black mr-auto"
      } max-w-xl`}
    >
      <strong>{role === "user" ? "Tú" : "IA"}:</strong>

      <p>{content}</p>
    </div>
  );
}

export default Message;