import React from 'react'
import { Scissors, Wand2, Zap, Brain, Download, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Smart Cutting",
      description: "AI automatically identifies the best moments and removes unwanted sections from your videos."
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Auto Enhancement",
      description: "Enhance video quality, adjust lighting, and improve audio with one-click AI processing."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Process hours of footage in minutes with our optimized AI rendering engine."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Scene Detection",
      description: "Automatically detect scene changes and create smooth transitions between clips."
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Multiple Formats",
      description: "Export in any format you need - MP4, MOV, AVI, and more with custom quality settings."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your videos are processed securely and never stored on our servers permanently."
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Powerful AI Features
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Everything you need to create professional videos, powered by cutting-edge artificial intelligence
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features