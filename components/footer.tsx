"use client"

import { Heart } from "lucide-react";

export function Footer() {
    return (
        <div>
            <footer className="border-t border-border bg-muted/30 py-12">
                <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Heart className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold text-foreground">Sompü</span>
                    </div>
                    <p className="text-muted-foreground">Connecting African creators with the world, one link at a time.</p>
                    </div>
                    <div>
                    <h3 className="font-semibold text-foreground mb-4">Product</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>
                        <a href="/features" className="hover:text-foreground transition-colors">
                            Features
                        </a>
                        </li>
                        <li>
                        <a href="/pricing" className="hover:text-foreground transition-colors">
                            Pricing
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Templates
                        </a>
                        </li>
                        <li>
                        <a href="/about" className="hover:text-foreground transition-colors">
                            About Us
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold text-foreground mb-4">Community</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Creators
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Blog
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Events
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div>
                    <h3 className="font-semibold text-foreground mb-4">Support</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Help Center
                        </a>
                        </li>
                        <li>
                        <a href="/contact" className="hover:text-foreground transition-colors">
                            Contact
                        </a>
                        </li>
                        <li>
                        <a href="#" className="hover:text-foreground transition-colors">
                            Privacy
                        </a>
                        </li>
                        <li>
                        <a href="/faq" className="hover:text-foreground transition-colors">
                            faq
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
                    <p>&copy; 2024 Sompü. Made with ❤️ for African creators.</p>
                </div>
                </div>
            </footer>
        </div>      
    )
}