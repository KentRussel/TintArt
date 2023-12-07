import moment from "moment";
import { IoShirtSharp } from "react-icons/io"
const DATA = {
    PESO: "₱",
    ADMIN: {
        HEADER_LINKS: [
            { name: 'dashboard', link: '/admin/dashboard' },
            // { name: 'properties', link: '/admin/properties' },
            // { name: 'categories', link: '/admin/categories' },
            { name: 'products', link: '/admin/products' },
            { name: 'orders', link: '/admin/orders' },
            { name: 'users', link: '/admin/users' },
            { name: 'settings', link: '/admin/settings/shop' },
        ],
        SETTING_LINKS: [
            { name: 'shop settings', link: '/admin/settings/shop' },
            { name: 'edit profile', link: '/admin/settings/profile' },
            { name: 'change password', link: '/admin/settings/password' },
        ]
    },
    PAYMENT_METHOD: [
        {
            title: "Credit/Debit Card",
            logo: "https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png",
            method: "credit"
        },
        {
            title: "Gcash",
            logo: "https://www.gcash.com/wp-content/uploads/2019/09/gcash-text-logo.png",
            method: "gcash"
        },
        {
            title: "Cash on Delivery",
            method: "cod"
        },
    ],
    FOOTER:
    {
        ADDRESS: "37 Magiliw St.Lena Subdivision, Dalandanan, Valenzuela City",
        CONTACT: "(+63) 9123456789",
        EMAIL: "tintartofficial@gmail.com",
        LINKS: [
            { name: 'home', link: '/' },
            { name: 'shop', link: '/shop' },
            { name: 'gallery', link: '/gallery' },
            { name: 'faqs', link: '/faqs' },
            { name: 'about us', link: '/about' },
        ],
        FOLLOWUS:
            [
                { name: 'Facebook', link: '/about' },
                { name: 'TikTok', link: '/about' },
            ]
    },
    ABOUT: [
        {
            role: "Artist",
            first_name: "Lorem",
            last_name: "Ipsum",
            social_media_links: [
                "/",
                "/",
                "/"
            ], image: "../images/about1.png"

        },
        {
            role: "Merchant",
            first_name: "Lorem",
            last_name: "Ipsum",
            social_media_links: [
                "/",
                "/",
                "/"
            ], image: "../images/about1.png"
        },
        {
            role: "Artist",
            first_name: "Lorem",
            last_name: "Ipsum",
            social_media_links: [
                "/",
                "/",
                "/"
            ], image: "../images/about1.png"

        },

    ],
    TABLE_HEADERS: {
        PROPERTIES: [
            { label: "Merchandise", name: "merchandise" },
            { label: "Values", name: "values" },
            { label: "Date Added", name: "created_at" }],
        USERS: [
            { label: "Name", name: "name" },
            { label: "Email", name: "email" },
            { label: "Contact no.", name: "contact_no" },
            { label: "Type", name: "role" },

            { label: "Date Added", name: "created_at" }],
        CATEGORIES: [
            { label: "Category ID", name: "_id" },
            { label: "Categories", name: "category" },
            { label: "Date Added", name: "created_at" }],
        ORDERS: [
            { label: "Order ID", name: "_id" },
            { label: "Receiver Name", name: "name" },
            { label: "Contact No.", name: "contact_no" },
            { label: "Address", name: "address" },
            { label: "Total Amount Due", name: "total_price" },
            { label: "Paid", name: "is_paid" },
            { label: "Status", name: "status" },
            { label: "Date Ordered", name: "created_at" }
        ],
        PRODUCTS: [
            { label: "Prdouct ID", name: "_id" },
            { label: "Name", name: "product_name" },
            { label: "Featured", name: "is_featured" },
            { label: "Archived", name: "is_archived" },
            { label: "Sold Out", name: "is_sold_out" },
            { label: "Price", name: "price" },
            { label: "Merchandise", name: "merchandise" },
            { label: "Size", name: "sizes" },
            { label: "Color", name: "colors" },
            { label: "Date Added", name: "created_at" }
        ],
    },
    DROPDOWN_GRAPH: ["Daily", "Weekly", "Yearly"],
    FAQS: [{
        topic: "Orders",
        sub_topic: [
            {
                title: "Placing an Order",
                QA: [
                    {
                        question: "What should I check before placing an order?",
                        answer: "Always check the product details, and the variation of the product that you wish to checkout."
                    },
                    {
                        question: "How do I remove an item in my shopping cart?",
                        answer: "To remove an item from your cart, go to your cart(located at the upper right), and click the trash icon beside the product you wish to remove."
                    },
                ]
            },
            {
                title: "Order Cancellation",
                QA: [
                    {
                        question: "Is there any way I could cancel my order?",
                        answer: `Yes! You can cancel your order by going to your profile and clicking “Cancel Order” on the order you wish to cancel.
                        NOTE: Cancellation is only accepted if your order is still NOT paid.This is to avoid confusion regarding refunds between the seller and the buyer.`
                    },
                    {
                        question: "Why was my order cancelled?",
                        answer: "This is due to our system cancelling orders that have still not been paid within 3 days after placing the order.You may order again and make sure that the order is paid within that certain amount of time."
                    },
                ]
            }
        ],

    },
    {
        topic: "Payment",
        sub_topic: [
            {
                title: "Payment Process",
                QA: [
                    {
                        question: "How should I send the payment?",
                        answer: "After placing your order and choosing from the payment methods listed, an invoice will be sent to your email together with the details on where you should send your payment.Take note that a cancellation will occur on the third day if the order is still not paid."
                    },
                ]
            },
        ]
    },
    {
        topic: "Shipping and Delivery",
        sub_topic: [
            {
                title: "Shipping FAQ",
                QA: [
                    {
                        question: "What are the shipping fees and rates ?",
                        answer: "The shipping fee may depend on the location of the buyer and the third - party courier that the seller will book.The seller will first inform the buyer of the shipping fee before they ship the order."
                    },
                ]
            },
            {
                title: "Delivery FAQ",
                QA: [
                    {
                        question: "Do you deliver during weekends and / or holidays ?",
                        answer: "Absolutely! However, it also depends on courier availability and the weather as we care about the quality and state of the products that you’ve ordered and the well - being of the delivery riders."
                    },
                    {
                        question: "How do I change my shipping address?",
                        answer: "Before placing an order, an overview of the order details will be displayed, together with the shipping address.You may edit it by clicking “Edit” or by going to your profile and “Edit Shipping Address” and filling out the fields needed."
                    },
                ]
            },
        ]
    },
    {
        topic: "Customization",
        sub_topic: [
            {
                title: "What is Customization Feature",
                QA: [
                    {
                        question: "What is customization?",
                        answer: "Customization refers to the ability to personalize and tailor products such t - shirts, sintra boards, and photocards according to your preferences, designs, or branding."
                    },
                    {
                        question: "How can I access the customization feature on this website?",
                        answer: "You may access the customization feature by clicking “Start Customizing” in the Homepage of the website, or by going to a product and clicking “Create your own design”."
                    },
                    {
                        question: "What are the available customization options ?",
                        answer: "Our customization options typically include choosing colors and elements, adding text, uploading images, selecting fonts, and adjusting the size and placement of designs.The specific customization features may vary depending on the product."
                    },
                    {
                        question: "What types of merchandise can I customize on this website ?",
                        answer: "We offer customization on t - shirts, photocards and sintra boards"
                    },
                    {
                        question: "Can I use my own designs for customization ?",
                        answer: "Absolutely! You can upload your own designs, logos, or artwork to personalize your merchandise.Our design tools make it easy to apply your creativity and make each item your own."
                    },
                    {
                        question: "Are there any restrictions on the designs I can use ?",
                        answer: "While we encourage creativity, we do have guidelines and restrictions on using offensive materials.We are not encouraging customers to create any sexual or offensive content."
                    },
                ]
            },
            {
                title: "Saving and Export",
                QA: [
                    {
                        question: "I still haven’t finished editing my work.Can I save it ?",
                        answer: "Yes! You may click “Save Custom Print” to save your draft.To access your past works, you may click the arrow beside it, and your list of works should appear."
                    },
                    {
                        question: "Can I export my work as an Image ?",
                        answer: "Yes, by clicking “Download” on the lower right of the page."
                    },
                ]
            }
        ]
    },
    {
        topic: "Product Quality",
        sub_topic: [
            {
                title: "T - Shirts",
                QA: [
                    {
                        question: "What materials are used for the t-shirts?",
                        answer: "We use high-quality, flexible materials suitable for clothing, ensuring comfort and durability. The shirt is made of Thick Cotton Blend Fabric (200 GSM). The materials are carefully selected to provide a soft and breathable finish on your T-shirt."
                    },
                    {
                        question: "How durable are the prints on the customized t-shirts?",
                        answer: "Our printing process ensures durable and vibrant prints that withstand regular washing and wear. Follow the care instructions provided to maintain the longevity of the print."
                    },
                ]
            },
            {
                title: "Photocards",
                QA: [
                    {
                        question: "What kind of finish do the photocards have?",
                        answer: "Our photocards have a high-quality finish for a professional look. You can choose between glossy or matte finishes based on your preference."
                    },
                ]
            },
            {
                title: "Sintra Boards",
                QA: [
                    {
                        question: "Is Sintra board suitable for outdoor use?",
                        answer: "Yes, Sintra board is well-suited for outdoor use. It's durable and weather-resistant, making it a great choice for outdoor signage and displays."
                    },
                ]
            }
        ]
    },
    {
        topic: "Gallery",
        sub_topic: [
            {
                title: "What is Gallery?",
                QA: [
                    {
                        question: "What does the gallery display?",
                        answer: "The gallery displays images and commissions created by two curated artists that are connected to TintArt."
                    },
                ]
            },
        ]
    },
    {
        topic: "Contact Us",
        sub_topic: [
            {
                title: "How contact works?",
                QA: [
                    {
                        question: "How do I contact the seller?",
                        answer: "The gallery displays images and commissions created by two curated artists that are connected to TintArt."
                    },
                ]
            },
        ]
    }
    ],
    EMAILS:
    {
        WELCOME: {
            SUBJECT: "Welcome to TintArt!",
            BODY: ({ name }) => {
                return (
                    `Dear ${name},\n\nThank you for joining in our Community! We're thrilled to welcome you to TintArt! Thank you for creating an account with us. Here's to a seamless and enjoyable experience ahead.\n\nIf you have any questions or need assistance, feel free to reach out to our support team at tintart@gmail.com or call us (+63) 9123456789. Happy exploring!\n\nBest regards,\nTintArt`)
            }
        },
        PASSWORD: {
            SUBJECT: "Password Reset Request",
            BODY: ({ name, code }) => {
                return (
                    `Dear ${name},

                    We received a request to reset the password associated with your account. To proceed with the password reset, please follow the steps below:
                    Your Code: ${code}
                    1. Enter the code that have been sent! 
                    2. Enter your new password and confirm password!
                    
                    If you did not initiate this request or have any concerns, please contact our support team immediately at tintart@gmail.com or call us (+63) 9123456789.
                    
                    Thank you for choosing our system.
                    
                    Best regards,
                    TintArt Customer Support Team`)
            }
        },
        ORDER: {
            SUBJECT: (order_number) => `Order ${order_number} confirmed`,
            BODY: ({ name, order_number, date, item, payment_method, amount }) => {
                const itemsList = item?.map(i => `- ${i?.product_id?.product_name}\n`).join('');
        
                return (
                    `Dear ${name},\n\n` +
                    `We hope this message finds you well. Thank you for choosing our system for your recent purchase. Here are the details of your order:\n\n` +
                    `Order Number: ${order_number}\n` +
                    `Date of Purchase: ${moment(date).format("MMMM DD, YYYY")}\n\n` +
                    `Items Ordered:\n${itemsList}\n` +
                    `Payment Details:\nTotal Amount: ${amount}\nPayment Method: ${payment_method}\n\n` +
                    `You may send your payment to:\n` +
                    `Gcash: [Gcash of Tofu Ink]\n` +
                    `Debit/Credit: [Card of Tofu Ink]\n\n` +
                    `Take note that you need to take a “screenshot” of your proof of payment if you paid through Gcash or Debit/Credit Card and send it through the “Messenger Plugin” built in the system.\n\n` +
                    `Please review the information above and ensure that all details are accurate. If you have any questions or concerns, feel free to reply to this email, and our customer support team will be happy to assist you.\n\n` +
                    `We appreciate your business and look forward to serving you again.\n\n` +
                    `Best regards,\nTintArt Customer Support Team`
                );
            }
        },
        
        CANCELATION: {
            SUBJECT: "Order Cancellation Notification",
            BODY: ({ admin, order_id, customer_name, item, reason }) => {
                const items = `${item?.map((i) => `\nName: ${i?.product_id?.product_name} \nQuantity: ${i?.quantity} \nPrice: ${i?.product_id?.price}`).join('\n\n') || ''}`;
                return (
                    `Dear ${admin},\n\nWe regret to inform you that an order has been canceled by customer. Below are the details of the canceled order:\n\n- Order ID: ${order_id}\n- Customer Name: ${customer_name}\n- Product(s): ${items}\n- Reason for Cancellation: ${reason}\n\nPlease take the necessary steps to update the inventory accordingly, and if there are any issues or questions regarding this cancellation, feel free to reach out to the customer or our customer support team.\n\nThank you for your prompt attention to this matter.\n\nBest regards,\nTintArt`
                )
            }
        },
        INQUIRY: {
            SUBJECT: "Acknowledgment of Your Inquiry",
            BODY: ({ customer_name }) => {
                return (
                    `Dear ${customer_name},\n\nThank you for reaching out to us! We wanted to inform you that we have received your recent concern submitted through our website.\n\nOur team is dedicated to providing excellent customer service, and we will be reviewing your message shortly. Please allow us some time to thoroughly investigate your concern and provide you with a comprehensive response.\n\nIn the meantime, if you have any additional information to add or if you think of anything else that may assist us in addressing your inquiry, feel free to reply to this email.\n\nWe appreciate your patience and look forward to assisting you.\n\nBest regards,\n\nTintArt Customer Support Team`
                )
            }
        }
    },
    ORDER_STATUS: [
        "PENDING PAYMENT",
        "PREPARING ORDER",
        "OUT OF DELIVERY",
        "COMPLETED",
        "CANCELLED"
    ],
    PROFILE_LINKS: [
        { name: 'Account Details', link: '/profile' },
        { name: 'Wishlist', link: '/wishlist' },
        { name: 'Order Transactions', link: '/order-history' },
        { name: 'Change password', link: '/password' },
    ],

    PRIVACY_POLICY: `
    Last updated October 18, 2023
    Welcome to Tintart. We understand the importance of privacy and are dedicated to protecting your personal information. This Privacy Policy outlines how we gather, use, share, and safeguard your data when you use our services.
    We encourage you to review this policy carefully to comprehend our practices regarding your personal information. By using Tintart, you agree to the terms outlined in this Privacy Policy. If you do not agree with any aspect of this policy, please refrain from using our services.
    You can contact us by phone at [insert phone num here], or email at [insert email address here].
    1. Introduction
    Welcome to TintArt, which is run by Tofu Ink (“we”, “us”, “our”). TintArt takes its responsibilities under applicable privacy laws and regulations ("Privacy Laws") seriously and is committed to respecting the privacy rights and concerns of all Users of our website (“Services”).
    
    2. Information We Collect
    
    2.1 Information You Provide
    We may collect personal information that you provide to us, including but not limited to your name, email address, phone number, and any other information you voluntarily submit when using our services.
    2.2 Automatically Collected Information
    We may collect certain information automatically, such as your IP address, device type, browser type, and usage data when you access and use our services.
    
    3. Age Restriction
    Tintart is intended for individuals who are 18 years of age or older. By using our services, you confirm that you meet this age requirement.
    
    4. How We Use Your Information
    We use the information we collect for the following purposes:
    
    4.1 Providing Services
    To provide the services you request, including account creation, communication, and support.
    
    4.2 Improving Services
    To enhance and improve our services, troubleshoot issues, and develop new features.
    
    5. Sharing Your Information
    We may share your information under the following circumstances:
    5.1 With Your Consent
    We may share your information when you provide explicit consent.
    
    5.2 Service Providers 
    We may share your information with trusted third-party service providers who assist us in delivering our services.
    
    5.3 Legal Obligations 
    We may share information when required by law, such as in response to legal requests or to protect our rights.
    
    6. Your Rights
    You have certain rights regarding your personal data:
    
    6.1 Access
    You can request access to the personal information we hold about you.
    
    6.2 Rectification
    You can request that we correct or update your personal information.
    
    6.3 Deletion
    You can request the deletion of your personal data, subject to applicable legal requirements.
    
    7. Data Security
    We take reasonable steps to protect your personal information from unauthorized access or disclosure. However, no data transmission over the internet can be guaranteed as 100% secure.
    
    8. Changes to this Privacy Policy
    We may update this Privacy Policy from time to time to reflect changes in our practices. When we make changes, we will revise the "Last Updated" date at the top of this policy.
    
    9. Contact Information
    For any inquiries or concerns regarding these Privacy Policy, please contact us at [Contact Information].
    By using our services, you acknowledge that you have read, understood, and agreed to our Privacy Policy.`,

    TERMS_AND_CONDITIONS: `TERMS AND CONDITIONS
    Last updated October 18, 2023
    
    AGREEMENT TO OUR LEGAL TERMS
    We are Tofu Ink, doing business as TintArt (“Company”, “we”, “us”, “our”), a company located in the Philippines at [insert address here].
    We operate the website https://tintart.vercel.app/ (the “Site”), as well as any other related products and services that refer or link to these terms and conditions (the “Legal Terms”) (collectively, the “Services”).
    We provide a platform where you can customize your own goods, and have it sent to our Facebook page directly through the Messenger plugin of our site. You may also buy ready-made products that we are selling and is posted on our website.
    You can contact us by phone at [insert phone num here], or email at [insert email address here].
    1. Acceptance of Terms
    These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”), and Tofu Ink, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
    
    2. Description of Services
    We provide a variety of products and services such as Print Customization through our eCommerce platform. Descriptions, pricing, and availability is subject to change without notice. We reserve the right to modify or discontinue any product or service at any time.
    
    2.1 Customization of Merchandise
    TintArt allows you to customize designs on merchandise such as t-shirts, photo cards, and sintra boards. By using the customization feature, you grant us permission to use and display your designs on our social media pages  and marketing materials unless otherwise specified.
    2.2 Purchasing of Products
    Our website allows you to browse, select and purchase products, wherein we gather information to track your orders and addresses (See Privacy Policy for more information about your data).
    
    3. Ordering and Payment
    Payment terms and fees for Tofu Ink services are determined on a per-order basis and will be specified in a separate agreement or invoice provided to you. Payment is expected upon receipt of the invoice unless otherwise agreed upon.
    
    3.1 Orders
    When you place an order with us, it constitutes an offer to purchase the product(s). We reserve the right to accept or reject any order at our discretion.
    
    3.2 Payment
    The payment options will be available for selection upon checking out the products, but the payment processing is handled by Tofu Ink, the merchant. TintArt is not responsible for the payment processing itself.
    
    4. Shipping and Delivery
    We will make reasonable efforts to deliver the merchandise promptly, but we are not liable for delays due to unforeseen circumstances. The delivery times may also vary based on your location.
    
    5. Returns and Refunds
    The number of revisions and refund policies will be outlined in the project agreement. Tofu Ink maintains a strict "no refunds" policy. Generally, minor revisions are included in the project fee, while significant changes may incur additional charges. Refunds will not be granted under any circumstances.
    
    6. Privacy and Data Collection
    We collect and use your personal information in accordance with our Privacy Policy, which is an integral part of these Terms and Conditions.
    
    7. Limitation of Liability
    Tofu Ink is not liable for any consequential, incidental, special, or indirect damages resulting from the use of our services or any errors or omissions in our work.
    
    8. Contact Information
    For any inquiries or concerns regarding these Terms and Conditions, please contact us at [Contact Information].
    
    By using our services, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.`,
};

export default DATA;