import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Card from "../components/Card";

const AddData = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cards, setCards] = useState([{
    title: "Welcome! 👋",
    description: "This is your personal notes app. Click the + button in the bottom right to add a new note card. You can add a title, description and date to each card.",
    date: new Date().toISOString().split('T')[0]
  }]);

  return (
    <div className="w-full h-full relative">
      <div className="w-full flex p-4 gap-4 flex-wrap ">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            date={card.date}
            onDelete={() => {
              const newCards = cards.filter((_, i) => i !== index);
              setCards(newCards);
            }}
          />
        ))}
      </div>
      <div className="absolute bottom-10 right-10">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-zinc-600 to-zinc-600 text-white font-medium px-4 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          <FiPlus />
        </button>
      </div>
      <SpringModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onSubmit={(data) => setCards([...cards, data])}
      />
    </div>
  );
};

const SpringModal = ({ isOpen, setIsOpen, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      description: "",
      date: "",
    });
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className=" bg-zinc-800 text-white px-4 py-3 rounded-lg w-full max-w-md shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex justify-end text-2xl">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent transition-colors text-white font-semibold rounded"
                >
                  <IoMdClose />
                </button>
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Add New Card
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 h-24"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-indigo-600 py-2 rounded-md font-medium hover:bg-white/90 transition-colors"
                >
                  Add Card
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddData;
