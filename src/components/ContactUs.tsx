import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) {
      toast.error("please enter message");
    } else {
      window.location.href = `mailto:connect@avinyaleather.com?subject=Inquiry%20to%20Avinya&body=${encodeURIComponent(
        message
      )}`;
      toast.success("You will redirected to your email box!");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex align-items-center w-100 p-2 rounded-pill border border-gray-300"
    >
      <InputGroup className="w-100">
        <Form.Control
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value.trimStart())}
          placeholder="Enter your message"
          className="flex-grow-1 px-4 py-2 bg-transparent border-0 placeholder-gray-400 text-sm custom-input"
        />

        <Button
          type="submit"
          className="p-3 bg-gradient-to-r from-primary border-0 to-secondary text-white rounded-circle transform scale-110"
          style={{ background: "linear-gradient(90deg, #466645, #1C3628)" }}
        >
          <FaPaperPlane color="white" />
        </Button>
      </InputGroup>
    </Form>
  );
}
