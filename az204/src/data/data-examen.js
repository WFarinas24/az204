export const data = [
    {
        "id": "816230",
        "topic": "Topic 1",
        "pregunta": "You have two Hyper-V hosts named Host1 and Host2. Host1 has an Azure virtual machine named VM1 that was deployed by using a custom Azure Resource\nManager template.\nYou need to move VM1 to Host2.\nWhat should you do?\n",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. From the Update management blade, click Enable.",
            "B. From the Overview blade, move VM1 to a different subscription.",
            "C. From the Redeploy blade, click Redeploy. Most Voted",
            "D. From the Profile blade, modify the usage location."
        ]
    },
    {
        "id": "816231",
        "topic": "Topic 1",
        "pregunta": "DRAG DROP -\nYou have downloaded an Azure Resource Manager template to deploy numerous virtual machines. The template is based on a current virtual machine, but must be adapted to reference an administrative password.\nYou need to make sure that the password is not stored in plain text.\nYou are preparing to create the necessary components to achieve your goal.\nWhich of the following should you create to achieve your goal? Answer by dragging the correct option from the list to the answer area.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0000300001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0000400001.jpg",
        "respuestas": []
    },
    {
        "id": "816232",
        "topic": "Topic 1",
        "pregunta": "Your company has an Azure Kubernetes Service (AKS) cluster that you manage from an Azure AD-joined device. The cluster is located in a resource group.\nDevelopers have created an application named MyApp. MyApp was packaged into a container image.\nYou need to deploy the YAML manifest file for the application.\nSolution: You install the Azure CLI on the device and run the kubectl apply `\"f myapp.yaml command.\nDoes this meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816233",
        "topic": "Topic 1",
        "pregunta": "Your company has an Azure Kubernetes Service (AKS) cluster that you manage from an Azure AD-joined device. The cluster is located in a resource group.\nDevelopers have created an application named MyApp. MyApp was packaged into a container image.\nYou need to deploy the YAML manifest file for the application.\nSolution: You install the docker client on the device and run the docker run -it microsoft/azure-cli:0.10.17 command.\nDoes this meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816234",
        "topic": "Topic 1",
        "pregunta": "Your company has a web app named WebApp1.\nYou use the WebJobs SDK to design a triggered App Service background task that automatically invokes a function in the code every time new data is received in a queue.\nYou are preparing to configure the service processes a queue data item.\nWhich of the following is the service you should use?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Logic Apps",
            "B. WebJobs",
            "C. Flow",
            "D. Functions"
        ]
    },
    {
        "id": "816235",
        "topic": "Topic 1",
        "pregunta": "Your company has an Azure subscription.\nYou need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set.\nYou need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.\nWhich of the following is the value that you should configure for the platformFaultDomainCount property?\n",
        "respuestaCorrecta": "D",
        "respuestas": [
            "A. 10",
            "B. 30",
            "C. Min Value",
            "D. Max Value"
        ]
    },
    {
        "id": "816236",
        "topic": "Topic 1",
        "pregunta": "Your company has an Azure subscription.\nYou need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set.\nYou need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.\nWhich of the following is the value that you should configure for the platformUpdateDomainCount property?\n",
        "respuestaCorrecta": "D",
        "respuestas": [
            "A. 10",
            "B. 20",
            "C. 30",
            "D. 40"
        ]
    },
    {
        "id": "816237",
        "topic": "Topic 1",
        "pregunta": "DRAG DROP -\nYou are creating an Azure Cosmos DB account that makes use of the SQL API. Data will be added to the account every day by a web application.\nYou need to ensure that an email notification is sent when information is received from IoT devices, and that compute cost is reduced.\nYou decide to deploy a function app.\nWhich of the following should you configure the function app to use? Answer by dragging the correct options from the list to the answer area.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0000900001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0001000001.jpg",
        "respuestas": []
    },
    {
        "id": "816238",
        "topic": "Topic 1",
        "pregunta": "This question requires that you evaluate the underlined text to determine if it is correct.\nYou company has an on-premises deployment of MongoDB, and an Azure Cosmos DB account that makes use of the MongoDB API.\nYou need to devise a strategy to migrate MongoDB to the Azure Cosmos DB account.\nYou include the Data Management Gateway tool in your migration strategy.\nInstructions: Review the underlined text. If it makes the statement correct, select `No change required.` If the statement is incorrect, select the answer choice that makes the statement correct.\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. No change required",
            "B. mongorestore",
            "C. Azure Storage Explorer",
            "D. AzCopy"
        ]
    },
    {
        "id": "816239",
        "topic": "Topic 1",
        "pregunta": "You are developing an e-Commerce Web App.\nYou want to use Azure Key Vault to ensure that sign-ins to the e-Commerce Web App are secured by using Azure App Service authentication and Azure Active\nDirectory (AAD).\nWhat should you do on the e-Commerce Web App?\n",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. Run the az keyvault secret command.",
            "B. Enable Azure AD Connect.",
            "C. Enable Managed Service Identity (MSI).",
            "D. Create an Azure AD service principal."
        ]
    },
    {
        "id": "816240",
        "topic": "Topic 1",
        "pregunta": "This question requires that you evaluate the underlined text to determine if it is correct.\nYour Azure Active Directory Azure (Azure AD) tenant has an Azure subscription linked to it.\nYour developer has created a mobile application that obtains Azure AD access tokens using the OAuth 2 implicit grant type.\nThe mobile application must be registered in Azure AD.\nYou require a redirect URI from the developer for registration purposes.\nInstructions: Review the underlined text. If it makes the statement correct, select `No change is needed.` If the statement is incorrect, select the answer choice that makes the statement correct.\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. No change required.",
            "B. a secret",
            "C. a login hint",
            "D. a client ID"
        ]
    },
    {
        "id": "816241",
        "topic": "Topic 1",
        "pregunta": "You are creating an Azure key vault using PowerShell. Objects deleted from the key vault must be kept for a set period of 90 days.\nWhich two of the following parameters must be used in conjunction to meet the requirement? (Choose two.)\n",
        "respuestaCorrecta": "BD",
        "respuestas": [
            "A. EnabledForDeployment",
            "B. EnablePurgeProtection",
            "C. EnabledForTemplateDeployment",
            "D. EnableSoftDelete"
        ]
    },
    {
        "id": "816242",
        "topic": "Topic 1",
        "pregunta": "HOTSPOT -\nYou have an Azure Active Directory (Azure AD) tenant.\nYou want to implement multi-factor authentication by making use of a conditional access policy. The conditional access policy must be applied to all users when they access the Azure portal.\nWhich three settings should you configure? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0001500001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0001700001.png",
        "respuestas": []
    },
    {
        "id": "816243",
        "topic": "Topic 1",
        "pregunta": "You manage an Azure SQL database that allows for Azure AD authentication.\nYou need to make sure that database developers can connect to the SQL database via Microsoft SQL Server Management Studio (SSMS). You also need to make sure the developers use their on-premises Active Directory account for authentication. Your strategy should allow for authentication prompts to be kept to a minimum.\nWhich of the following should you implement?\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0001900001.jpg",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. Azure AD token.",
            "B. Azure Multi-Factor authentication.",
            "C. Active Directory integrated authentication.",
            "D. OATH software tokens."
        ]
    },
    {
        "id": "816244",
        "topic": "Topic 1",
        "pregunta": "You are developing an application to transfer data between on-premises file servers and Azure Blob storage. The application stores keys, secrets, and certificates in Azure Key Vault and makes use of the Azure Key Vault APIs.\nYou want to configure the application to allow recovery of an accidental deletion of the key vault or key vault objects for 90 days after deletion.\nWhat should you do?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Run the Add-AzKeyVaultKey cmdlet.",
            "B. Run the az keyvault update --enable-soft-delete true --enable-purge-protection true CLI.",
            "C. Implement virtual network service endpoints for Azure Key Vault.",
            "D. Run the az keyvault update --enable-soft-delete false CLI."
        ]
    },
    {
        "id": "816245",
        "topic": "Topic 1",
        "pregunta": "HOTSPOT -\nYou have developed a Web App for your company. The Web App provides services and must run in multiple regions.\nYou want to be notified whenever the Web App uses more than 85 percent of the available CPU cores over a 5 minute period. Your solution must minimize costs.\nWhich command should you use? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0002100001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0002200001.jpg",
        "respuestas": []
    },
    {
        "id": "816246",
        "topic": "Topic 1",
        "pregunta": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.\nYou need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.\nSolution: You include the use of Azure Redis Cache in your design.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816247",
        "topic": "Topic 1",
        "pregunta": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.\nYou need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.\nSolution: You include the use of an Azure Content Delivery Network (CDN) in your design.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816248",
        "topic": "Topic 1",
        "pregunta": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.\nYou need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.\nSolution: You include the use of a Storage Area Network (SAN) in your design.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816249",
        "topic": "Topic 1",
        "pregunta": "You develop a Web App on a tier D1 app service plan.\nYou notice that page load times increase during periods of peak traffic.\nYou want to implement automatic scaling when CPU load is above 80 percent. Your solution must minimize costs.\nWhat should you do first?\n",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. Enable autoscaling on the Web App.",
            "B. Switch to the Premium App Service tier plan.",
            "C. Switch to the Standard App Service tier plan.",
            "D. Switch to the Azure App Services consumption plan."
        ]
    },
    {
        "id": "816250",
        "topic": "Topic 1",
        "pregunta": "Your company's Azure subscription includes an Azure Log Analytics workspace.\nYour company has a hundred on-premises servers that run either Windows Server 2012 R2 or Windows Server 2016, and is linked to the Azure Log Analytics workspace. The Azure Log Analytics workspace is set up to gather performance counters associated with security from these linked servers.\nYou must configure alerts based on the information gathered by the Azure Log Analytics workspace.\nYou have to make sure that alert rules allow for dimensions, and that alert creation time should be kept to a minimum. Furthermore, a single alert notification must be created when the alert is created and when the alert is resolved.\nYou need to make use of the necessary signal type when creating the alert rules.\nWhich of the following is the option you should use?\n",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. The Activity log signal type.",
            "B. The Application Log signal type.",
            "C. The Metric signal type.",
            "D. The Audit Log signal type."
        ]
    },
    {
        "id": "816251",
        "topic": "Topic 1",
        "pregunta": "You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers.\nYou want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to accommodation.\nYou want the application to allow customers to search the index by using regular expressions.\nWhat should you do?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Configure the SearchMode property of the SearchParameters class.",
            "B. Configure the QueryType property of the SearchParameters class.",
            "C. Configure the Facets property of the SearchParameters class.",
            "D. Configure the Filter property of the SearchParameters class."
        ]
    },
    {
        "id": "816252",
        "topic": "Topic 1",
        "pregunta": "You are a developer at your company.\nYou need to update the definitions for an existing Logic App.\nWhat should you use?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. the Enterprise Integration Pack (EIP)",
            "B. the Logic App Code View",
            "C. the API Connections",
            "D. the Logic Apps Designer"
        ]
    },
    {
        "id": "816253",
        "topic": "Topic 1",
        "pregunta": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must configure back-end authentication for the API Management service instance.\nSolution: You configure Basic gateway credentials for the Azure resource.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816254",
        "topic": "Topic 1",
        "pregunta": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must configure back-end authentication for the API Management service instance.\nSolution: You configure Client cert gateway credentials for the HTTP(s) endpoint.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816255",
        "topic": "Topic 1",
        "pregunta": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must configure back-end authentication for the API Management service instance.\nSolution: You configure Basic gateway credentials for the HTTP(s) endpoint.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816256",
        "topic": "Topic 1",
        "pregunta": "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must configure back-end authentication for the API Management service instance.\nSolution: You configure Client cert gateway credentials for the Azure resource.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816257",
        "topic": "Topic 1",
        "pregunta": "You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers.\nYou want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to accommodation venues.\nYou want the application to list holiday accommodation venues that fall within a specific price range and are within a specified distance to an airport.\nWhat should you do?\n",
        "respuestaCorrecta": "D",
        "respuestas": [
            "A. Configure the SearchMode property of the SearchParameters class.",
            "B. Configure the QueryType property of the SearchParameters class.",
            "C. Configure the Facets property of the SearchParameters class.",
            "D. Configure the Filter property of the SearchParameters class."
        ]
    },
    {
        "id": "816258",
        "topic": "Topic 1",
        "pregunta": "You are a developer at your company.\nYou need to edit the workflows for an existing Logic App.\nWhat should you use?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. the Enterprise Integration Pack (EIP)",
            "B. the Logic App Code View",
            "C. the API Connections",
            "D. the Logic Apps Designer"
        ]
    },
    {
        "id": "816259",
        "topic": "Topic 1",
        "pregunta": "DRAG DROP -\nYou are a developer for a company that provides a bookings management service in the tourism industry. You are implementing Azure Search for the tour agencies listed in your company's solution.\nYou create the index in Azure Search. You now need to use the Azure Search .NET SDK to import the relevant data into the Azure Search service.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions from left to right and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0003200001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0003300001.jpg",
        "respuestas": []
    },
    {
        "id": "816260",
        "topic": "Topic 1",
        "pregunta": "You are developing an application that applies a set of governance policies for internal and external services, as well as for applications.\nYou develop a stateful ASP.NET Core 2.1 web application named PolicyApp and deploy it to an Azure App Service Web App. The PolicyApp reacts to events from\nAzure Event Grid and performs policy actions based on those events.\nYou have the following requirements:\n✑ Authentication events must be used to monitor users when they sign in and sign out.\n✑ All authentication events must be processed by PolicyApp.\n✑ Sign outs must be processed as fast as possible.\nWhat should you do?\n",
        "respuestaCorrecta": "D",
        "respuestas": [
            "A. Create a new Azure Event Grid subscription for all authentication events. Use the subscription to process sign-out events.",
            "B. Create a separate Azure Event Grid handler for sign-in and sign-out events.",
            "C. Create separate Azure Event Grid topics and subscriptions for sign-in and sign-out events.",
            "D. Add a subject prefix to sign-out events. Create an Azure Event Grid subscription. Configure the subscription to use the subjectBeginsWith filter."
        ]
    },
    {
        "id": "816261",
        "topic": "Topic 1",
        "pregunta": "HOTSPOT -\nYou are developing a C++ application that compiles to a native application named process.exe. The application accepts images as input and returns images in one of the following image formats: GIF, PNG, or JPEG.\nYou must deploy the application as an Azure Function.\nYou need to configure the function and host json files.\nHow should you complete the json files? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0003600001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0003700001.png",
        "respuestas": []
    },
    {
        "id": "860774",
        "topic": "Topic 1",
        "pregunta": "HOTSPOT\n-\n\nYou are developing an Azure Static Web app that contains training materials for a tool company. Each tool’s training material is contained in a static web page that is linked from the tool’s publicly available description page.\n\nA user must be authenticated using Azure AD prior to viewing training.\n\nYou need to ensure that the user can view training material pages after authentication.\n\nHow should you complete the configuration file? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image377.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image378.png",
        "respuestas": []
    },
    {
        "id": "860775",
        "topic": "Topic 1",
        "pregunta": "HOTSPOT\n-\n\nYou are authoring a set of nested Azure Resource Manager templates to deploy Azure resources. You author an Azure Resource Manager template named mainTemplate.json that contains the following linked templates: linkedTemplate1.json, linkedTemplate2.json.\n\nYou add parameters to a parameters template file named mainTemplate.parameters,json. You save all templates on a local device in the C:\\templates\\ folder.\n\nYou have the following requirements:\n\n• Store the templates in Azure for later deployment.\n• Enable versioning of the templates.\n• Manage access to the templates by using Azure RBAC.\n• Ensure that users have read-only access to the templates.\n• Allow users to deploy the templates.\n\nYou need to store the templates in Azure.\n\nHow should you complete the command? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image379.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image380.png",
        "respuestas": []
    },
    {
        "id": "860776",
        "topic": "Topic 1",
        "pregunta": "HOTSPOT\n-\n\nYou are developing a service where customers can report news events from a browser using Azure Web PubSub. The service is implemented as an Azure Function App that uses the JSON WebSocket subprotocol to receive news events.\n\nYou need to implement the bindings for the Azure Function App.\n\nHow should you configure the binding? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image381.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image382.png",
        "respuestas": []
    },
    {
        "id": "860777",
        "topic": "Topic 1",
        "pregunta": "HOTSPOT\n-\n\nYou are building a software-as-a-service (SaaS) application that analyzes DNA data that will run on Azure virtual machines (VMs) in an availability zone. The data is stored on managed disks attached to the VM. The performance of the analysis is determined by the speed of the disk attached to the VM.\n\nYou have the following requirements:\n\n• The application must be able to quickly revert to the previous day’s data if a systemic error is detected.\n• The application must minimize downtime in the case of an Azure datacenter outage.\n\nYou need to provision the managed disk for the VM to maximize performance while meeting the requirements.\n\nWhich type of Azure Managed Disk should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image383.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image384.png",
        "respuestas": []
    },
    {
        "id": "860778",
        "topic": "Topic 1",
        "pregunta": "HOTSPOT\n-\n\nYou are developing an application that includes two Docker containers.\n\nThe application must meet the following requirements:\n\n• The containers must not run as root.\n• The containers must be deployed to Azure Container Instances by using a YAML file.\n• The containers must share a lifecycle, resources, local network, and storage volume.\n• The storage volume must persist through container crashes.\n• The storage volume must be deployed on stop or restart of the containers.\n\nYou need to configure Azure Container Instances for the application.\n\nWhich configuration values should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image385.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image386.png",
        "respuestas": []
    },
    {
        "id": "816262",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are implementing a software as a service (SaaS) ASP.NET Core web service that will run as an Azure Web App. The web service will use an on-premises\nSQL Server database for storage. The web service also includes a WebJob that processes data updates. Four customers will use the web service.\n✑ Each instance of the WebJob processes data for a single customer and must run as a singleton instance.\n✑ Each deployment must be tested by using deployment slots prior to serving production data.\n✑ Azure costs must be minimized.\n✑ Azure resources must be located in an isolated network.\nYou need to configure the App Service plan for the Web App.\nHow should you configure the App Service plan? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0008800001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0008900001.jpg",
        "respuestas": []
    },
    {
        "id": "816263",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou are a developer for a software as a service (SaaS) company that uses an Azure Function to process orders. The Azure Function currently runs on an Azure\nFunction app that is triggered by an Azure Storage queue.\nYou are preparing to migrate the Azure Function to Kubernetes using Kubernetes-based Event Driven Autoscaling (KEDA).\nYou need to configure Kubernetes Custom Resource Definitions (CRD) for the Azure Function.\nWhich CRDs should you configure? To answer, drag the appropriate CRD types to the correct locations. Each CRD type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0009000001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0009100001.jpg",
        "respuestas": []
    },
    {
        "id": "816264",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are creating a CLI script that creates an Azure web app and related services in Azure App Service. The web app uses the following variables:\n\nYou need to automatically deploy code from GitHub to the newly created web app.\nHow should you complete the script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0009200001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0009400001.jpg",
        "respuestas": []
    },
    {
        "id": "816265",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Trigger the photo processing from Blob storage events.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816266",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Update the web.config file to include the applicationInitialization configuration element. Specify custom initialization actions to run the scripts.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. No",
            "B. Yes"
        ]
    },
    {
        "id": "816267",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Enable auto swap for the Testing slot. Deploy the app to the Testing slot.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. No",
            "B. Yes"
        ]
    },
    {
        "id": "816268",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Disable auto swap. Update the app with a method named statuscheck to run the scripts. Re-enable auto swap and deploy the app to the Production slot.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. No",
            "B. Yes"
        ]
    },
    {
        "id": "816269",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Convert the Azure Storage account to a BlockBlobStorage storage account.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816270",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are developing an Azure Web App. You configure TLS mutual authentication for the web app.\nYou need to validate the client certificate in the web app. To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0010000001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0010100001.jpg",
        "respuestas": []
    },
    {
        "id": "816271",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou are developing a Docker/Go using Azure App Service Web App for Containers. You plan to run the container in an App Service on Linux. You identify a\nDocker container image to use.\nNone of your current resource groups reside in a location that supports Linux. You must minimize the number of resource groups required.\nYou need to create the application and perform an initial deployment.\nWhich three Azure CLI commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0010200001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0010300001.png",
        "respuestas": []
    },
    {
        "id": "816272",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nFourth Coffee has an ASP.NET Core web app that runs in Docker. The app is mapped to the www.fourthcoffee.com domain.\nFourth Coffee is migrating this application to Azure.\nYou need to provision an App Service Web App to host this docker image and map the custom domain to the App Service web app.\nA resource group named FourthCoffeePublicWebResourceGroup has been created in the WestUS region that contains an App Service Plan named\nAppServiceLinuxDockerPlan.\nWhich order should the CLI commands be used to develop the solution? To answer, move all of the Azure CLI commands from the list of commands to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0010500001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0010600001.jpg",
        "respuestas": []
    },
    {
        "id": "816273",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou are developing a serverless Java application on Azure. You create a new Azure Key Vault to work with secrets from a new Azure Functions application.\nThe application must meet the following requirements:\n✑ Reference the Azure Key Vault without requiring any changes to the Java code.\n✑ Dynamically add and remove instances of the Azure Functions host based on the number of incoming application events.\n✑ Ensure that instances are perpetually warm to avoid any cold starts.\n✑ Connect to a VNet.\n✑ Authentication to the Azure Key Vault instance must be removed if the Azure Function application is deleted.\nYou need to grant the Azure Functions application access to the Azure Key Vault.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0010800001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0010900001.png",
        "respuestas": []
    },
    {
        "id": "816274",
        "topic": "Topic 2",
        "pregunta": "You develop a website. You plan to host the website in Azure. You expect the website to experience high traffic volumes after it is published.\nYou must ensure that the website remains available and responsive while minimizing cost.\nYou need to deploy the website.\nWhat should you do?\n",
        "respuestaCorrecta": "D",
        "respuestas": [
            "A. Deploy the website to a virtual machine. Configure the virtual machine to automatically scale when the CPU load is high.",
            "B. Deploy the website to an App Service that uses the Shared service tier. Configure the App Service plan to automatically scale when the CPU load is high.",
            "C. Deploy the website to a virtual machine. Configure a Scale Set to increase the virtual machine instance count when the CPU load is high.",
            "D. Deploy the website to an App Service that uses the Standard service tier. Configure the App Service plan to automatically scale when the CPU load is high."
        ]
    },
    {
        "id": "816275",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nA company is developing a Java web app. The web app code is hosted in a GitHub repository located at https://github.com/Contoso/webapp.\nThe web app must be evaluated before it is moved to production. You must deploy the initial code release to a deployment slot named staging.\nYou need to create the web app and deploy the code.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0011100001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0011200001.png",
        "respuestas": []
    },
    {
        "id": "816276",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou have a web service that is used to pay for food deliveries. The web service uses Azure Cosmos DB as the data store.\nYou plan to add a new feature that allows users to set a tip amount. The new feature requires that a property named tip on the document in Cosmos DB must be present and contain a numeric value.\nThere are many existing websites and mobile apps that use the web service that will not be updated to set the tip property for some time.\nHow should you complete the trigger?\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0011400001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0011500001.jpg",
        "respuestas": []
    },
    {
        "id": "816277",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Use the Durable Function async pattern to process the blob data.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816278",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Pass the HTTP trigger payload into an Azure Service Bus queue to be processed by a queue trigger function and return an immediate HTTP success response.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816279",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Configure the app to use an App Service hosting plan and enable the Always On setting.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816280",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Move photo processing to an Azure Function triggered from the blob upload.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816281",
        "topic": "Topic 2",
        "pregunta": "You are developing an application that uses Azure Blob storage.\nThe application must read the transaction logs of all the changes that occur to the blobs and the blob metadata in the storage account for auditing purposes. The changes must be in the order in which they occurred, include only create, update, delete, and copy operations and be retained for compliance reasons.\nYou need to process the transaction logs asynchronously.\nWhat should you do?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Process all Azure Blob storage events by using Azure Event Grid with a subscriber Azure Function app.",
            "B. Enable the change feed on the storage account and process all changes for available events.",
            "C. Process all Azure Storage Analytics logs for successful blob events.",
            "D. Use the Azure Monitor HTTP Data Collector API and scan the request body for successful blob events."
        ]
    },
    {
        "id": "816282",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and a series of application files including ContosoApp.dll.\nYou need to create a Dockerfile document that meets the following requirements:\n✑ Call setupScripts.ps1 when the container is built.\n✑ Run ContosoApp.dll when the container starts.\nThe Dockerfile document must be created in the same folder where ContosoApp.dll and setupScript.ps1 are stored.\nWhich five commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0012100001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0012100002.png",
        "respuestas": []
    },
    {
        "id": "816283",
        "topic": "Topic 2",
        "pregunta": "You are developing an Azure Function App that processes images that are uploaded to an Azure Blob container.\nImages must be processed as quickly as possible after they are uploaded, and the solution must minimize latency. You create code to process images when the\nFunction App is triggered.\nYou need to configure the Function App.\nWhat should you do?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Use an App Service plan. Configure the Function App to use an Azure Blob Storage input trigger.",
            "B. Use a Consumption plan. Configure the Function App to use an Azure Blob Storage trigger.",
            "C. Use a Consumption plan. Configure the Function App to use a Timer trigger.",
            "D. Use an App Service plan. Configure the Function App to use an Azure Blob Storage trigger.",
            "E. Use a Consumption plan. Configure the Function App to use an Azure Blob Storage input trigger."
        ]
    },
    {
        "id": "816284",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are configuring a new development environment for a Java application.\nThe environment requires a Virtual Machine Scale Set (VMSS), several storage accounts, and networking components.\nThe VMSS must not be created until the storage accounts have been successfully created and an associated load balancer and virtual network is configured.\nHow should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0012400001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0012500001.png",
        "respuestas": []
    },
    {
        "id": "816285",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are developing an Azure Function App by using Visual Studio. The app will process orders input by an Azure Web App. The web app places the order information into Azure Queue Storage.\nYou need to review the Azure Function App code shown below.\n\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0012700001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0012800001.png",
        "respuestas": []
    },
    {
        "id": "816286",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou are developing a solution for a hospital to support the following use cases:\n✑ The most recent patient status details must be retrieved even if multiple users in different locations have updated the patient record.\n✑ Patient health monitoring data retrieved must be the current version or the prior version.\n✑ After a patient is discharged and all charges have been assessed, the patient billing record contains the final charges.\nYou provision a Cosmos DB NoSQL database and set the default consistency level for the database account to Strong. You set the value for Indexing Mode to\nConsistent.\nYou need to minimize latency and any impact to the availability of the solution. You must override the default consistency level at the query level to meet the required consistency guarantees for the scenarios.\nWhich consistency levels should you implement? To answer, drag the appropriate consistency levels to the correct requirements. Each consistency level may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0012900004.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0012900005.png",
        "respuestas": []
    },
    {
        "id": "816287",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are configuring a development environment for your team. You deploy the latest Visual Studio image from the Azure Marketplace to your Azure subscription.\nThe development environment requires several software development kits (SDKs) and third-party components to support application development across the organization. You install and customize the deployed virtual machine (VM) for your development team. The customized VM must be saved to allow provisioning of a new team member development environment.\nYou need to save the customized VM for future provisioning.\nWhich tools or services should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0013100001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0013100002.png",
        "respuestas": []
    },
    {
        "id": "816288",
        "topic": "Topic 2",
        "pregunta": "You are preparing to deploy a website to an Azure Web App from a GitHub repository. The website includes static content generated by a script.\nYou plan to use the Azure Web App continuous deployment feature.\nYou need to run the static generation script before the website starts serving traffic.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
        "respuestaCorrecta": "AD",
        "respuestas": [
            "A. Add the path to the static content generation tool to WEBSITE_RUN_FROM_PACKAGE setting in the host.json file.",
            "B. Add a PreBuild target in the websites csproj project file that runs the static content generation script.",
            "C. Create a file named run.cmd in the folder /run that calls a script which generates the static content and deploys the website.",
            "D. Create a file named .deployment in the root of the repository that calls a script which generates the static content and deploys the website."
        ]
    },
    {
        "id": "816289",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou are developing an application to use Azure Blob storage. You have configured Azure Blob storage to include change feeds.\nA copy of your storage account must be created in another region. Data must be copied from the current storage account to the new storage account directly between the storage servers.\nYou need to create a copy of the storage account in another region and copy the data.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0013400001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0013400002.jpg",
        "respuestas": []
    },
    {
        "id": "816290",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou are preparing to deploy an Azure virtual machine (VM)-based application.\nThe VMs that run the application have the following requirements:\n✑ When a VM is provisioned the firewall must be automatically configured before it can access Azure resources.\n✑ Supporting services must be installed by using an Azure PowerShell script that is stored in Azure Storage.\nYou need to ensure that the requirements are met.\nWhich features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0013600001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0013600002.jpg",
        "respuestas": []
    },
    {
        "id": "816291",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nA company is developing a Node.js web app. The web app code is hosted in a GitHub repository located at https://github.com/TailSpinToys/webapp.\nThe web app must be reviewed before it is moved to production. You must deploy the initial code release to a deployment slot named review.\nYou need to create the web app and deploy the code.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0013700001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0013800001.jpg",
        "respuestas": []
    },
    {
        "id": "816292",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are developing an application that needs access to an Azure virtual machine (VM).\nThe access lifecycle for the application must be associated with the VM service instance.\nYou need to enable managed identity for the VM.\nHow should you complete the PowerShell segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0013900001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0014000001.jpg",
        "respuestas": []
    },
    {
        "id": "816293",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Create an Azure Function app that uses the Consumption hosting model and that is triggered from the blob upload.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816294",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Update the app with a method named statuscheck to run the scripts. Update the app settings for the app. Set the\nWEBSITE_SWAP_WARMUP_PING_PATH and WEBSITE_SWAP_WARMUP_PING_STATUSES with a path to the new method and appropriate response codes.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. No",
            "B. Yes"
        ]
    },
    {
        "id": "816295",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou create the following PowerShell script:\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0014200001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0014300002.png",
        "respuestas": []
    },
    {
        "id": "816296",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou are developing an Azure Function app.\nThe app must meet the following requirements:\n✑ Enable developers to write the functions by using the Rust language.\n✑ Declaratively connect to an Azure Blob Storage account.\nYou need to implement the app.\nWhich Azure Function app features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0014500001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0014500002.png",
        "respuestas": []
    },
    {
        "id": "816297",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are developing an ASP.NET Core web application. You plan to deploy the application to Azure Web App for Containers.\nThe application needs to store runtime diagnostic data that must be persisted across application restarts. You have the following code:\n\nYou need to configure the application settings so that diagnostic data is stored as required.\nHow should you configure the web app's settings? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0014600001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0014700002.jpg",
        "respuestas": []
    },
    {
        "id": "816298",
        "topic": "Topic 2",
        "pregunta": "You are developing a web app that is protected by Azure Web Application Firewall (WAF). All traffic to the web app is routed through an Azure Application\nGateway instance that is used by multiple web apps. The web app address is contoso.azurewebsites.net.\nAll traffic must be secured with SSL. The Azure Application Gateway instance is used by multiple web apps.\nYou need to configure the Azure Application Gateway for the web app.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0014900001.jpg",
        "respuestaCorrecta": "AD",
        "respuestas": [
            "A. In the Azure Application Gateway's HTTP setting, enable the Use for App service setting.",
            "B. Convert the web app to run in an Azure App service environment (ASE).",
            "C. Add an authentication certificate for contoso.azurewebsites.net to the Azure Application Gateway.",
            "D. In the Azure Application Gateway's HTTP setting, set the value of the Override backend path option to contoso22.azurewebsites.net."
        ]
    },
    {
        "id": "816299",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Use the Azure Blob Storage change feed to trigger photo processing.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816300",
        "topic": "Topic 2",
        "pregunta": "You are developing a web application that runs as an Azure Web App. The web application stores data in Azure SQL Database and stores files in an Azure\nStorage account. The web application makes HTTP requests to external services as part of normal operations.\nThe web application is instrumented with Application Insights. The external services are OpenTelemetry compliant.\nYou need to ensure that the customer ID of the signed in user is associated with all operations throughout the overall system.\nWhat should you do?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Add the customer ID for the signed in user to the CorrelationContext in the web application",
            "B. On the current SpanContext, set the TraceId to the customer ID for the signed in user",
            "C. Set the header Ocp-Apim-Trace to the customer ID for the signed in user",
            "D. Create a new SpanContext with the TraceFlags value set to the customer ID for the signed in user"
        ]
    },
    {
        "id": "816301",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are developing an Azure Function App. You develop code by using a language that is not supported by the Azure Function App host. The code language supports HTTP primitives.\nYou must deploy the code to a production Azure Function App environment.\nYou need to configure the app for deployment.\nWhich configuration values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0015200001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0015300001.png",
        "respuestas": []
    },
    {
        "id": "816302",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou provision virtual machines (VMs) as development environments.\nOne VM does not start. The VM is stuck in a Windows update process. You attach the OS disk for the affected VM to a recovery VM.\nYou need to correct the issue.\nIn which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0015500001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0015500002.jpg",
        "respuestas": []
    },
    {
        "id": "816303",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Update the functionTimeout property of the host.json project file to 10 minutes.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816304",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT -\nYou are developing an Azure Durable Function based application that processes a list of input values. The application is monitored using a console application that retrieves JSON data from an Azure Function diagnostic endpoint.\nDuring processing a single instance of invalid input does not cause the function to fail. Invalid input must be available to the monitoring application.\nYou need to implement the Azure Durable Function and the monitoring console application.\nHow should you complete the code segments? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0015800001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0015900001.jpg",
        "respuestas": []
    },
    {
        "id": "816305",
        "topic": "Topic 2",
        "pregunta": "You are developing an Azure Durable Function to manage an online ordering process.\nThe process must call an external API to gather product discount information.\nYou need to implement the Azure Durable Function.\nWhich Azure Durable Function types should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
        "respuestaCorrecta": "AB",
        "respuestas": [
            "A. Orchestrator",
            "B. Entity",
            "C. Client",
            "D. Activity"
        ]
    },
    {
        "id": "816306",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP -\nYou are authoring a set of nested Azure Resource Manager templates to deploy multiple Azure resources.\nThe templates must be tested before deployment and must follow recommended practices.\nYou need to validate and test the templates before deployment.\nWhich tools should you use? To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0016200001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0016200002.png",
        "respuestas": []
    },
    {
        "id": "860779",
        "topic": "Topic 2",
        "pregunta": "You develop Azure Durable Functions to manage vehicle loans.\n\nThe loan process includes multiple actions that must be run in a specified order. One of the actions includes a customer credit check process, which may require multiple days to process.\n\nYou need to implement Azure Durable Functions for the loan process.\n\nWhich Azure Durable Functions type should you use?",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. orchestrator",
            "B. client",
            "C. entity",
            "D. activity"
        ]
    },
    {
        "id": "860780",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT\n-\n\nYou are developing an Azure Function app.\n\nAll functions in the app meet the following requirements:\n\n• Run until either a successful run or until 10 run attempts occur.\n• Ensure that there are at least 20 seconds between attempts for up to 15 minutes.\n\nYou need to configure the host.json file.\n\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image387.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image388.png",
        "respuestas": []
    },
    {
        "id": "860781",
        "topic": "Topic 2",
        "pregunta": "You develop Azure Web Apps for a commercial diving company. Regulations require that all divers fill out a health questionnaire every 15 days after each diving job starts.\n\nYou need to configure the Azure Web Apps so that the instance count scales up when divers are filling out the questionnaire and scales down after they are complete.\n\nYou need to configure autoscaling.\n\nWhat are two possible auto scaling configurations to achieve this goal? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
        "respuestaCorrecta": "CD",
        "respuestas": [
            "A. Recurrence profile",
            "B. CPU usage-based autoscaling",
            "C. Fixed date profile",
            "D. Predictive autoscaling"
        ]
    },
    {
        "id": "882059",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT\n-\n\nYou are developing an online game that allows players to vote for their favorite photo that illustrates a word. The game is built by using Azure Functions and uses durable entities to track the vote count.\n\nThe voting window is 30 seconds. You must minimize latency.\n\nYou need to implement the Azure Function for voting.\n\nHow should you complete the code? To answer, select the appropriate options in the answer area.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image422.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image423.png",
        "respuestas": []
    },
    {
        "id": "890548",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT\n-\n\nYou have an App Service plan named asp1 based on the Free pricing tier.\n\nYou plan to use asp1 to implement an Azure Function app with a queue trigger. Your solution must minimize cost.\n\nYou need to identify the configuration options that will meet the requirements.\n\nWhich value should you configure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image443.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image444.png",
        "respuestas": []
    },
    {
        "id": "890549",
        "topic": "Topic 2",
        "pregunta": "DRAG DROP\n-\n\nYou are developing several microservices to run on Azure Container Apps.\n\nThe microservices must allow HTTPS access by using a custom domain.\n\nYou need to configure the custom domain in Azure Container Apps.\n\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image445.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image446.png",
        "respuestas": []
    },
    {
        "id": "890550",
        "topic": "Topic 2",
        "pregunta": "You are developing several microservices to run on Azure Container Apps. External HTTP ingress traffic has been enabled for the microservices.\n\nThe microservices must be deployed to the same virtual network and write logs to the same Log Analytics workspace.\n\nYou need to deploy the microservices.\n\nWhat should you do?",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Enable single revision mode.",
            "B. Use a separate environment for each container.",
            "C. Use a private container registry image and single image for all containers.",
            "D. Use a single environment for all containers.",
            "E. Enable multiple revision mode."
        ]
    },
    {
        "id": "892685",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT\n-\n\nYou are developing several microservices to run on Azure Container Apps. External HTTP ingress traffic has been enabled for the microservices.\n\nA deployed microservice must be updated to allow users to test new features. You have the following requirements:\n\n• Enable and maintain a single URL for the updated microservice to provide to test users.\n• Update the microservice that corresponds to the current microservice version.\n\nYou need to configure Azure Container Apps.\n\nWhich features should you configure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image463.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image464.png",
        "respuestas": []
    },
    {
        "id": "900741",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT\n-\n\nYou plan to develop an Azure Functions app with an HTTP trigger.\n\nThe app must support the following requirements:\n\n• Event-driven scaling\n• Ability to use custom Linux images for function execution\n\nYou need to identify the app’s hosting plan and the maximum amount of time that the app function can take to respond to incoming requests.\n\nWhich configuration setting values should you use? To answer, select the appropriate values in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image478.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image479.png",
        "respuestas": []
    },
    {
        "id": "900742",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT\n-\n\nYou develop a Python application for image rendering. The application uses GPU resources to optimize rendering processes.\n\nYou have the following requirements:\n\n• The application must be deployed to a Linux container.\n• The container must be stopped when the image rendering is complete.\n• The solution must minimize cost.\n\nYou need to deploy the application to Azure.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image480.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image481.png",
        "respuestas": []
    },
    {
        "id": "900743",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT\n-\n\nYou plan to develop an Azure Functions app with an Azure Blob Storage trigger. The app will be used infrequently, with a limited duration of individual executions.\n\nThe app must meet the following requirements:\n\n• Event-driven scaling\n• Support for deployment slots\n• Minimize costs\n\nYou need to identify the hosting plan and the maximum duration when executing the app.\n\nWhich configuration setting values should you use? To answer, select the appropriate values in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image482.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image483.png",
        "respuestas": []
    },
    {
        "id": "907840",
        "topic": "Topic 2",
        "pregunta": "You are developing an ASP.NET Core app hosted in Azure App Service.\n\nThe app requires custom claims to be returned from Microsoft Entra ID for user authorization. The claims must be removed when the app registration is removed.\n\nYou need to include the custom claims in the user access token.\n\nWhat should you do?",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Require the https://graph.microsoft.com/.default scope during authentication.",
            "B. Configure the app to use the OAuth 2.0 authorization code flow.",
            "C. Implement custom middleware to retrieve role information from Azure AD.",
            "D. Add the groups to the groupMembershipClaims attribute in the app manifest.",
            "E. Add the roles to the appRoles attribute in the app manifest."
        ]
    },
    {
        "id": "907841",
        "topic": "Topic 2",
        "pregunta": "You are developing a microservice to run on Azure Container Apps for a company. External HTTP ingress traffic has been enabled.\n\nThe company requires that updates to the microservice must not cause downtime.\n\nYou need to deploy an update to the microservices.\n\nWhat should you do?",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Enable single revision mode.",
            "B. Use multiple environments for each container.",
            "C. Use a private container registry and single image for all containers.",
            "D. Use a single environment for all containers.",
            "E. Enable multiple revision mode."
        ]
    },
    {
        "id": "907842",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT\n-\n\nA company uses Azure Container Apps. A container app named App1 resides in a resource group named RG1.\n\nThe company requires testing of updates to App1.\n\nYou enable multiple revision modes on App1.\n\nYou need to ensure traffic is routed to each revision of App1.\n\nHow should you complete the code segment?\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image500.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image501.png",
        "respuestas": []
    },
    {
        "id": "907843",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou deploy an Azure Container Apps app and disable ingress on the container app.\n\nUsers report that they are unable to access the container app. You investigate and observe that the app has scaled to 0 instances.\n\nYou need to resolve the issue with the container app.\n\nSolution: Enable ingress, create an HTTP scale rule, and apply the rule to the container app.\n\nDoes the solution meet the goal?",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "907844",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou deploy an Azure Container Apps app and disable ingress on the container app.\n\nUsers report that they are unable to access the container app. You investigate and observe that the app has scaled to 0 instances.\n\nYou need to resolve the issue with the container app.\n\nSolution: Enable ingress, create a custom scale rule, and apply the rule to the container app.\n\nDoes the solution meet the goal?",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "907845",
        "topic": "Topic 2",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou deploy an Azure Container Apps app and disable ingress on the container app.\n\nUsers report that they are unable to access the container app. You investigate and observe that the app has scaled to 0 instances.\n\nYou need to resolve the issue with the container app.\n\nSolution: Enable ingress and configure the minimum replicas to 1 for the container app.\n\nDoes the solution meet the goal?",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "907846",
        "topic": "Topic 2",
        "pregunta": "HOTSPOT\n-\n\n\nCase study\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground\n-\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment\n-\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website\n-\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms\n-\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors\n-\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements\n-\n\nThe application components must meet the following requirements:\n\n\nCorporate website\n-\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms\n-\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors\n-\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff\n-\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity\n-\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues\n-\n\n\nCorporate website\n-\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors\n-\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to configure App Service to support the corporate website migration.\n\nWhich configuration should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image502.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image503.png",
        "respuestas": []
    },
    {
        "id": "816307",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are developing a solution that uses the Azure Storage Client library for .NET. You have the following code: (Line numbers are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0020500001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0020600002.png",
        "respuestas": []
    },
    {
        "id": "816308",
        "topic": "Topic 3",
        "pregunta": "You are building a website that uses Azure Blob storage for data storage. You configure Azure Blob storage lifecycle to move all blobs to the archive tier after 30 days.\nCustomers have requested a service-level agreement (SLA) for viewing data older than 30 days.\nYou need to document the minimum SLA for data recovery.\nWhich SLA should you use?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. at least two days",
            "B. between one and 15 hours",
            "C. at least one day",
            "D. between zero and 60 minutes"
        ]
    },
    {
        "id": "816309",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are developing a ticket reservation system for an airline.\nThe storage solution for the application must meet the following requirements:\n✑ Ensure at least 99.99% availability and provide low latency.\n✑ Accept reservations even when localized network outages or other unforeseen failures occur.\n✑ Process reservations in the exact sequence as reservations are submitted to minimize overbooking or selling the same seat to multiple travelers.\n✑ Allow simultaneous and out-of-order reservations with a maximum five-second tolerance window.\nYou provision a resource group named airlineResourceGroup in the Azure South-Central US region.\nYou need to provision a SQL API Cosmos DB account to support the app.\nHow should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0020900001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0021100001.jpg",
        "respuestas": []
    },
    {
        "id": "816310",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are preparing to deploy a Python website to an Azure Web App using a container. The solution will use multiple containers in the same container group. The\nDockerfile that builds the container is as follows:\n\nYou build a container by using the following command. The Azure Container Registry instance named images is a private registry.\n\nThe user name and password for the registry is admin.\nThe Web App must always run the same version of the website regardless of future builds.\nYou need to create an Azure Web App to run the website.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0021300001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0021500001.jpg",
        "respuestas": []
    },
    {
        "id": "816311",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are developing a back-end Azure App Service that scales based on the number of messages contained in a Service Bus queue.\nA rule already exists to scale up the App Service when the average queue length of unprocessed and valid queue messages is greater than 1000.\nYou need to add a new rule that will continuously scale down the App Service as long as the scale up condition is not met.\nHow should you configure the Scale rule? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0021700001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0021900001.jpg",
        "respuestas": []
    },
    {
        "id": "816312",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP -\nYou have an application that uses Azure Blob storage.\nYou need to update the metadata of the blobs.\nWhich three methods should you use to develop the solution? To answer, move the appropriate methods from the list of methods to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0022100001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0022100002.jpg",
        "respuestas": []
    },
    {
        "id": "816313",
        "topic": "Topic 3",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce\n2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Event Grid. Configure the machine identifier as the partition key and enable capture.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816314",
        "topic": "Topic 3",
        "pregunta": "You develop Azure solutions.\nA .NET application needs to receive a message each time an Azure virtual machine finishes processing data. The messages must NOT persist after being processed by the receiving application.\nYou need to implement the .NET object that will receive the messages.\nWhich object should you use?\n",
        "respuestaCorrecta": "D",
        "respuestas": [
            "A. QueueClient",
            "B. SubscriptionClient",
            "C. TopicClient",
            "D. CloudQueueClient"
        ]
    },
    {
        "id": "816315",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP -\nYou are maintaining an existing application that uses an Azure Blob GPv1 Premium storage account. Data older than three months is rarely used.\nData newer than three months must be available immediately. Data older than a year must be saved but does not need to be available immediately.\nYou need to configure the account to support a lifecycle management rule that moves blob data to archive storage for data not modified in the last year.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0022400001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0022400002.jpg",
        "respuestas": []
    },
    {
        "id": "816316",
        "topic": "Topic 3",
        "pregunta": "You develop Azure solutions.\nYou must connect to a No-SQL globally-distributed database by using the .NET API.\nYou need to create an object to configure and execute requests in the database.\nWhich code segment should you use?\n",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. new Container(EndpointUri, PrimaryKey);",
            "B. new Database(EndpointUri, PrimaryKey);",
            "C. new CosmosClient(EndpointUri, PrimaryKey);"
        ]
    },
    {
        "id": "816317",
        "topic": "Topic 3",
        "pregunta": "You have an existing Azure storage account that stores large volumes of data across multiple containers.\nYou need to copy all data from the existing storage account to a new storage account. The copy process must meet the following requirements:\n✑ Automate data movement.\n✑ Minimize user input required to perform the operation.\n✑ Ensure that the data movement process is recoverable.\nWhat should you use?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. AzCopy",
            "B. Azure Storage Explorer",
            "C. Azure portal",
            "D. .NET Storage Client Library"
        ]
    },
    {
        "id": "816318",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP -\nYou are developing a web service that will run on Azure virtual machines that use Azure Storage. You configure all virtual machines to use managed identities.\nYou have the following requirements:\n✑ Secret-based authentication mechanisms are not permitted for accessing an Azure Storage account.\n✑ Must use only Azure Instance Metadata Service endpoints.\nYou need to write code to retrieve an access token to access Azure Storage. To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0022700003.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0022800001.jpg",
        "respuestas": []
    },
    {
        "id": "816319",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP -\nYou are developing a new page for a website that uses Azure Cosmos DB for data storage. The feature uses documents that have the following format:\n\nYou must display data for the new page in a specific order. You create the following query for the page:\n\nYou need to configure a Cosmos DB policy to support the query.\nHow should you configure the policy? To answer, drag the appropriate JSON segments to the correct locations. Each JSON segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0022900001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0023100001.png",
        "respuestas": []
    },
    {
        "id": "816320",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are building a traffic monitoring system that monitors traffic along six highways. The system produces time series analysis-based reports for each highway.\nData from traffic sensors are stored in Azure Event Hub.\nTraffic data is consumed by four departments. Each department has an Azure Web App that displays the time series-based reports and contains a WebJob that processes the incoming data from Event Hub. All Web Apps run on App Service Plans with three instances.\nData throughput must be maximized. Latency must be minimized.\nYou need to implement the Azure Event Hub.\nWhich settings should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0023300001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0023400001.png",
        "respuestas": []
    },
    {
        "id": "816321",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP -\nYou are developing a microservices solution. You plan to deploy the solution to a multinode Azure Kubernetes Service (AKS) cluster.\nYou need to deploy a solution that includes the following features:\n✑ reverse proxy capabilities\n✑ configurable traffic routing\n✑ TLS termination with a custom certificate\nWhich components should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0023500004.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0023600001.jpg",
        "respuestas": []
    },
    {
        "id": "816322",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP -\nYou are implementing an order processing system. A point of sale application publishes orders to topics in an Azure Service Bus queue. The Label property for the topic includes the following data:\n\nThe system has the following requirements for subscriptions:\n\nYou need to implement filtering and maximize throughput while evaluating filters.\nWhich filter types should you implement? To answer, drag the appropriate filter types to the correct subscriptions. Each filter type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0023700001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0023900001.png",
        "respuestas": []
    },
    {
        "id": "816323",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP -\nYour company has several websites that use a company logo image. You use Azure Content Delivery Network (CDN) to store the static image.\nYou need to determine the correct process of how the CDN and the Point of Presence (POP) server will distribute the image and list the items in the correct order.\nIn which order do the actions occur? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0024100001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0024100002.jpg",
        "respuestas": []
    },
    {
        "id": "816324",
        "topic": "Topic 3",
        "pregunta": "You are developing an Azure Cosmos DB solution by using the Azure Cosmos DB SQL API. The data includes millions of documents. Each document may contain hundreds of properties.\nThe properties of the documents do not contain distinct values for partitioning. Azure Cosmos DB must scale individual containers in the database to meet the performance needs of the application by spreading the workload evenly across all partitions over time.\nYou need to select a partition key.\nWhich two partition keys can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
        "respuestaCorrecta": "DE",
        "respuestas": [
            "A. a single property value that does not appear frequently in the documents",
            "B. a value containing the collection name",
            "C. a single property value that appears frequently in the documents",
            "D. a concatenation of multiple property values with a random suffix appended",
            "E. a hash suffix appended to a property value"
        ]
    },
    {
        "id": "816325",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are developing an Azure-hosted e-commerce web application. The application will use Azure Cosmos DB to store sales orders. You are using the latest SDK to manage the sales orders in the database.\nYou create a new Azure Cosmos DB instance. You include a valid endpoint and valid authorization key to an appSettings.json file in the code project.\nYou are evaluating the following application code: (Line number are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0024400001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0024500002.jpg",
        "respuestas": []
    },
    {
        "id": "816326",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP -\nYou develop an Azure solution that uses Cosmos DB.\nThe current Cosmos DB container must be replicated and must use a partition key that is optimized for queries.\nYou need to implement a change feed processor solution.\nWhich change feed processor components should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view the content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0024700001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0024700002.png",
        "respuestas": []
    },
    {
        "id": "816327",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are developing a web application that will use Azure Storage. Older data will be less frequently used than more recent data.\nYou need to configure data storage for the application. You have the following requirements:\n✑ Retain copies of data for five years.\n✑ Minimize costs associated with storing data that is over one year old.\n✑ Implement Zone Redundant Storage for application data.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0024800004.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0024900001.png",
        "respuestas": []
    },
    {
        "id": "816328",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nA company develops a series of mobile games. All games use a single leaderboard service.\nYou have the following requirements:\n✑ Code must be scalable and allow for growth.\n✑ Each record must consist of a playerId, gameId, score, and time played.\n✑ When users reach a new high score, the system will save the new score using the SaveScore function below.\nEach game is assigned an Id based on the series title.\n\nYou plan to store customer information in Azure Cosmos DB. The following data already exists in the database:\n\nYou develop the following code to save scores in the data store. (Line numbers are included for reference only.)\n\nYou develop the following code to query the database. (Line numbers are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0024900005.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0025100002.png",
        "respuestas": []
    },
    {
        "id": "816329",
        "topic": "Topic 3",
        "pregunta": "You develop and deploy a web application to Azure App Service. The application accesses data stored in an Azure Storage account. The account contains several containers with several blobs with large amounts of data. You deploy all Azure resources to a single region.\nYou need to move the Azure Storage account to the new region. You must copy all data to the new region.\nWhat should you do first?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Export the Azure Storage account Azure Resource Manager template",
            "B. Initiate a storage account failover",
            "C. Configure object replication for all blobs",
            "D. Use the AzCopy command line tool",
            "E. Create a new Azure Storage account in the current region",
            "F. Create a new subscription in the current region"
        ]
    },
    {
        "id": "816330",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are developing an application to collect the following telemetry data for delivery drivers: first name, last name, package count, item id, and current location coordinates. The app will store the data in Azure Cosmos DB.\nYou need to configure Azure Cosmos DB to query the data.\nWhich values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0025400001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0025500001.png",
        "respuestas": []
    },
    {
        "id": "816331",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP -\nYou are implementing an Azure solution that uses Azure Cosmos DB and the latest Azure Cosmos DB SDK. You add a change feed processor to a new container instance.\nYou attempt to read a batch of 100 documents. The process fails when reading one of the documents. The solution must monitor the progress of the change feed processor instance on the new container as the change feed is read. You must prevent the change feed processor from retrying the entire batch when one document cannot be read.\nYou need to implement the change feed processor to read the documents.\nWhich features should you use? To answer, drag the appropriate features to the cored requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each cored selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0025600001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0025700001.jpg",
        "respuestas": []
    },
    {
        "id": "816332",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are developing an application that uses a premium block blob storage account. The application will process a large volume of transactions daily. You enable\nBlob storage versioning.\nYou are optimizing costs by automating Azure Blob Storage access tiers. You apply the following policy rules to the storage account. (Line numbers are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0025800001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0025900002.png",
        "respuestas": []
    },
    {
        "id": "816333",
        "topic": "Topic 3",
        "pregunta": "An organization deploys Azure Cosmos DB.\nYou need to ensure that the index is updated as items are created, updated, or deleted.\nWhat should you do?\n",
        "respuestaCorrecta": "D",
        "respuestas": [
            "A. Set the indexing mode to Lazy.",
            "B. Set the value of the automatic property of the indexing policy to False.",
            "C. Set the value of the EnableScanInQuery option to True.",
            "D. Set the indexing mode to Consistent."
        ]
    },
    {
        "id": "816334",
        "topic": "Topic 3",
        "pregunta": "You are developing a .Net web application that stores data in Azure Cosmos DB. The application must use the Core API and allow millions of reads and writes.\nThe Azure Cosmos DB account has been created with multiple write regions enabled. The application has been deployed to the East US2 and Central US regions.\nYou need to update the application to support multi-region writes.\nWhat are two possible ways to achieve this goal? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
        "respuestaCorrecta": "CD",
        "respuestas": [
            "A. Update the ConnectionPolicy class for the Cosmos client and populate the PreferredLocations property based on the geo-proximity of the application.",
            "B. Update Azure Cosmos DB to use the Strong consistency level. Add indexed properties to the container to indicate region.",
            "C. Update the ConnectionPolicy class for the Cosmos client and set the UseMultipleWriteLocations property to true.",
            "D. Create and deploy a custom conflict resolution policy.",
            "E. Update Azure Cosmos DB to use the Session consistency level. Send the SessionToken property value from the FeedResponse object of the write action to the end-user by using a cookie."
        ]
    },
    {
        "id": "816335",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are developing a solution to store documents in Azure Blob storage. Customers upload documents to multiple containers. Documents consist of PDF, CSV,\nMicrosoft Office format and plain text files.\nThe solution must process millions of documents across hundreds of containers. The solution must meet the following requirements:\n✑ Documents must be categorized by a customer identifier as they are uploaded to the storage account.\n✑ Allow filtering by the customer identifier.\n✑ Allow searching of information contained within a document\n✑ Minimize costs.\nYou create and configure a standard general-purpose v2 storage account to support the solution.\nYou need to implement the solution.\nWhat should you implement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0026300001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0026400001.png",
        "respuestas": []
    },
    {
        "id": "816336",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nYou are developing a web application by using the Azure SDK. The web application accesses data in a zone-redundant BlockBlobStorage storage account.\nThe application must determine whether the data has changed since the application last read the data. Update operations must use the latest data changes when writing data to the storage account.\nYou need to implement the update operations.\nWhich values should you use? To answer, select the appropriate option in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0026600001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0026700001.png",
        "respuestas": []
    },
    {
        "id": "816337",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nAn organization deploys a blob storage account. Users take multiple snapshots of the blob storage account over time.\nYou need to delete all snapshots of the blob storage account. You must not delete the blob storage account itself.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0026800001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0026900001.jpg",
        "respuestas": []
    },
    {
        "id": "816338",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT -\nAn organization deploys a blob storage account. Users take multiple snapshots of the blob storage account over time.\nYou need to delete all snapshots of the blob storage account. You must not delete the blob storage account itself.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0027000001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0027000002.jpg",
        "respuestas": []
    },
    {
        "id": "860782",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT\n-\n\nYou are developing an application that monitors data added to an Azure Blob storage account.\n\nYou need to process each change made to the storage account.\n\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image389.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image390.png",
        "respuestas": []
    },
    {
        "id": "860783",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT\n-\n\nYou develop an application that sells AI generated images based on user input. You recently started a marketing campaign that displays unique ads every second day.\n\nSales data is stored in Azure Cosmos DB with the date of each sale being stored in a property named ‘whenFinished’.\n\nThe marketing department requires a view that shows the number of sales for each unique ad.\nYou need to implement the query for the view.\n\nHow should you complete the query? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image391.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image392.png",
        "respuestas": []
    },
    {
        "id": "860784",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT\n-\n\nYou implement an Azure solution to include Azure Cosmos DB, the latest Azure Cosmos DB SDK, and the Core (SQL) API. You also implement a change feed processor on a new container instance by using the Azure Functions trigger for Azure Cosmos DB.\n\nA large batch of documents continues to fail when reading one of the documents in the batch. The same batch of documents is continuously retried by the triggered function and a new batch of documents must be read.\n\nYou need to implement the change feed processor to read the documents.\n\nWhich feature should you implement? To answer, select the appropriate features in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image393.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image394.png",
        "respuestas": []
    },
    {
        "id": "860785",
        "topic": "Topic 3",
        "pregunta": "You are developing an application to store business-critical data in Azure Blob storage.\n\nThe application must meet the following requirements:\n\n• Data must not be modified or deleted for a user-specified interval.\n• Data must be protected from overwrites and deletes.\n• Data must be written once and allowed to be read many times.\n\nYou need to protect the data in the Azure Blob storage account.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
        "respuestaCorrecta": "AF",
        "respuestas": [
            "A. Configure a time-based retention policy for the storage account.",
            "B. Create an account shared-access signature (SAS).",
            "C. Enable the blob change feed for the storage account.",
            "D. Enable version-level immutability support for the storage account.",
            "E. Enable point-in-time restore for containers in the storage account.",
            "F. Create a service shared-access signature (SAS)."
        ]
    },
    {
        "id": "860786",
        "topic": "Topic 3",
        "pregunta": "You are updating an application that stores data on Azure and uses Azure Cosmos DB for storage. The application stores data in multiple documents associated with a single username.\n\nThe application requires the ability to update multiple documents for a username in a single ACID operation.\n\nYou need to configure Azure Cosmos DB.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.",
        "respuestaCorrecta": "CD",
        "respuestas": [
            "A. Create a collection sharded on username to store documents.",
            "B. Configure Azure Cosmos DB to use the Gremlin API.",
            "C. Create an unsharded collection to store documents.",
            "D. Configure Azure Cosmos DB to use the MongoDB API."
        ]
    },
    {
        "id": "860787",
        "topic": "Topic 3",
        "pregunta": "You develop Azure solutions.\n\nYou must connect to a No-SQL globally-distributed database by using the .NET API.\n\nYou need to create an object to configure and execute requests in the database.\n\nWhich code segment should you use?",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. database_name = 'MyDatabase'\ndatabase = client.create_database_if_not_exists(id=database_name)",
            "B. client = CosmosClient(endpoint, key)",
            "C. container_name = 'MyContainer'\ncontainer = database.create_container_if_not_exists(\nid=container_name, partition_key=PartitionKey(path=\"/lastName\"), offer_throughput=400 )"
        ]
    },
    {
        "id": "882060",
        "topic": "Topic 3",
        "pregunta": "You develop a web application that provides access to legal documents that are stored on Azure Blob Storage with version-level immutability policies. Documents are protected with both time-based policies and legal hold policies. All time-based retention policies have the AllowProtectedAppendWrites property enabled.\n\nYou have a requirement to prevent the user from attempting to perform operations that would fail only when a legal hold is in effect and when all other policies are expired.\n\nYou need to meet the requirement.\n\nWhich two operations should you prevent? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.",
        "respuestaCorrecta": "BD",
        "respuestas": [
            "A. adding data to documents",
            "B. deleting documents",
            "C. creating documents",
            "D. overwriting existing documents"
        ]
    },
    {
        "id": "882061",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT\n-\n\nYou provisioned an Azure Cosmos DB for NoSQL account named account1 with the default consistency level.\n\nYou plan to configure the consistency level on a per request basis. The level needs to be set for consistent prefix for read and write operations to account1.\n\nYou need to identify the resulting consistency level for read and write operations.\n\nWhich levels should you configure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image424.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image425.png",
        "respuestas": []
    },
    {
        "id": "882062",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP\n-\n\nYou are developing an application to store millions of images in Azure blob storage. The images are uploaded to an Azure blob storage container named companyimages contained in an Azure blob storage account named companymedia. The stored images are uploaded with multiple blob index tags across multiple blobs in the container.\n\nYou must find all blobs whose tags match a search expression in the container. The search expression must evaluate an index tag named status with a value of final.\n\nYou need to construct the GET method request URI.\n\nHow should you complete the URI? To answer, drag the appropriate parameters to the correct request URI targets. Each parameter may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image426.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image427.png",
        "respuestas": []
    },
    {
        "id": "890551",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT\n-\n\nYou develop two Python scripts to process data.\n\nThe Python scripts must be deployed to two, separate Linux containers running in an Azure Container Instance container group. The containers must access external data by using the Server Message Block (SMB) protocol. Containers in the container group must run only once.\n\nYou need to configure the Azure Container Instance.\n\nWhich configuration value should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image447.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image448.png",
        "respuestas": []
    },
    {
        "id": "890552",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT\n-\n\nYou are developing a static website hosted on Azure Blob Storage. You create a storage account and enable static website hosting.\n\nThe website must support the following requirements:\n\n• Custom domain name\n• Custom header values for all responses\n• Custom SSL certificate\n\nYou need to implement the static website.\n\nWhat should you configure? To answer, select the appropriate values in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image449.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image450.png",
        "respuestas": []
    },
    {
        "id": "890553",
        "topic": "Topic 3",
        "pregunta": "You are developing an inventory tracking solution. The solution includes an Azure Function app containing multiple functions triggered by Azure Cosmos DB. You plan to deploy the solution to multiple Azure regions.\n\nThe solution must meet the following requirements:\n\n• Item results from Azure Cosmos DS must return the most recent committed version of an item.\n• Items written to Azure Cosmos DB must provide ordering guarantees.\n\nYou need to configure the consistency level for the Azure Cosmos DB deployments.\n\nWhich consistency level should you use?",
        "respuestaCorrecta": "D",
        "respuestas": [
            "A. consistent prefix",
            "B. eventual",
            "C. bounded staleness",
            "D. strong",
            "E. session"
        ]
    },
    {
        "id": "890554",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT\n-\n\nYou are developing an application that runs in several customer Azure Kubernetes Service clusters. Within each cluster, a pod runs that collects performance data to be analyzed later. A large amount of data is collected so saving latency must be minimized.\n\nThe performance data must be stored so that pod restarts do not impact the stored data. Write latency should be minimized.\n\nYou need to configure blob storage.\n\nHow should you complete the YAML configuration? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image451.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image452.png",
        "respuestas": []
    },
    {
        "id": "892275",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT\n-\n\n\nCase study\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground\n-\n\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\n\nCurrent environment\n-\n\n\nCorporate website\n-\n\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\n\nRetail Store Locations\n-\n\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\n\nRequirements\n-\n\nThe application components must meet the following requirements:\n\n\nCorporate website\n-\n\n• Secure the website by using SSL.\n• Minimize costs for data storage and hosting.\n• Implement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\n• Distribute the website content globally for local use.\n• Implement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\n• The website must have 99.95 percent uptime.\n\n\nRetail store locations\n-\n\n• Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\n• Audit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\n\nDelivery services\n-\n\n• Store service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\n• Store delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\n\nInventory services\n-\n\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to\ninclude read-only access to the data.\n\n\nSecurity\n-\n\n• All Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\n• Authentication and authorization must use Azure AD and services must use managed identities where possible.\n\n\nIssues\n-\n\n\nRetail Store Locations\n-\n\n• You must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\n• Azure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\n\n\nYou need to implement the delivery service telemetry data.\n\nHow should you configure the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image461.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image462.png",
        "respuestas": []
    },
    {
        "id": "892686",
        "topic": "Topic 3",
        "pregunta": "You create and publish a new Azure App Service web app.\n\nUser authentication and authorization must use Azure Active Directory (Azure AD).\n\nYou need to configure authentication and authorization.\n\nWhat should you do first?",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Add an identity provider.",
            "B. Map an existing custom DNS name.",
            "C. Create and configure a new app setting.",
            "D. Add a private certificate.",
            "E. Create and configure a managed identity."
        ]
    },
    {
        "id": "892687",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP\n-\n\nYou have an Azure Cosmos DB for NoSQL account.\n\nYou plan to develop two apps named App1 and App2 that will use the change feed functionality to track changes to containers. App1 will use the pull model and App2 will use the push model.\n\nYou need to choose the method to track the most recently processed change in App1 and App2.\n\nWhich component should you use? To answer, drag the appropriate components to the correct apps. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image465.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image466.png",
        "respuestas": []
    },
    {
        "id": "900744",
        "topic": "Topic 3",
        "pregunta": "You have a Linux container-based console application that uploads image files from customer sites all over the world. A back-end system that runs on Azure virtual machines processes the images by using the Azure Blobs API.\n\nYou are not permitted to make changes to the application.\n\nSome customer sites only have phone-based internet connections.\n\nYou need to configure the console application to access the images.\n\nWhat should you use?",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. Azure BlobFuse",
            "B. Azure Disks",
            "C. Azure Storage Network File System (NFS) 3.0 support",
            "D. Azure Files"
        ]
    },
    {
        "id": "900745",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP\n-\n\nYou are developing several microservices named serviceA, serviceB, and serviceC. You deploy the microservices to a new Azure Container Apps environment.\n\nYou have the following requirements:\n\n• The microservices must persist data to storage.\n• serviceA must persist data only visible to the current container and the storage must be restricted to the amount of disk space available in the container.\n• serviceB must persist data for the lifetime of the replica and allow multiple containers in the replica to mount the same storage location.\n• serviceC must persist data beyond the lifetime of the replica while allowing multiple containers to access the storage and enable per object permissions.\n\nYou need to configure storage for each microservice.\n\nWhich storage type should you use? To answer, drag the appropriate storage types to the correct microservices. Each storage type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image484.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image485.png",
        "respuestas": []
    },
    {
        "id": "907847",
        "topic": "Topic 3",
        "pregunta": "DRAG DROP\n-\n\nYou are developing a web service that will run on Azure virtual machines that use Azure Storage. You configure all virtual machines to use managed identities.\n\nYou have the following requirements:\n\n• Secret-based authentication mechanisms are not permitted for accessing an Azure Storage account.\n• Must use only Azure Instance Metadata Service endpoints.\n\nYou need to write code to retrieve an access token to access Azure Storage. To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image504.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image505.png",
        "respuestas": []
    },
    {
        "id": "907848",
        "topic": "Topic 3",
        "pregunta": "HOTSPOT\n-\n\nYou are developing an Azure Function app.\n\nThe Azure Function app must enable a WebHook to read an image from Azure Blob Storage and create a new Azure Cosmos DB document.\n\nYou need to implement the Azure Function app.\n\nWhich configuration should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
        "imgPregunta": "https://img.examtopics.com/az-204/image506.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://img.examtopics.com/az-204/image507.png",
        "respuestas": []
    },
    {
        "id": "907849",
        "topic": "Topic 3",
        "pregunta": "You create an Azure Cosmos DB for NoSQL database.\n\nYou plan to use the Azure Cosmos DB .NET SDK v3 API for NoSQL to upload the following files:\n\n\n\nYou receive the following error message when uploading the files: “413 Entity too large”.\n\nYou need to determine which files you can upload to the Azure Cosmos DB for NoSQL database.\n\nWhich files can you upload?",
        "imgPregunta": "https://img.examtopics.com/az-204/image508.png",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. File1, File2, File3, File4, and File5",
            "B. File1 and File2 only",
            "C. File1, File2, and File3 only",
            "D. File1, File2, File3, and File4 only",
            "E. File1 only"
        ]
    },
    {
        "id": "816339",
        "topic": "Topic 4",
        "pregunta": "You are developing a Java application that uses Cassandra to store key and value data. You plan to use a new Azure Cosmos DB resource and the Cassandra\nAPI in the application. You create an Azure Active Directory (Azure AD) group named Cosmos DB Creators to enable provisioning of Azure Cosmos accounts, databases, and containers.\nThe Azure AD group must not be able to access the keys that are required to access the data.\nYou need to restrict access to the Azure AD group.\nWhich role-based access control should you use?\n",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. DocumentDB Accounts Contributor",
            "B. Cosmos Backup Operator",
            "C. Cosmos DB Operator",
            "D. Cosmos DB Account Reader"
        ]
    },
    {
        "id": "816340",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.\nYou need to configure authorization.\nSolution: Configure the Azure Web App for the website to allow only authenticated requests and require Azure AD log on.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816341",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.\nYou need to configure authorization.\nSolution:\n✑ Create a new Azure AD application. In the application's manifest, set value of the groupMembershipClaims option to All.\n✑ In the website, use the value of the groups claim from the JWT for the user to determine permissions.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816342",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.\nYou need to configure authorization.\nSolution:\n✑ Create a new Azure AD application. In the application's manifest, define application roles that match the required permission levels for the application.\n✑ Assign the appropriate Azure AD group to each role. In the website, use the value of the roles claim from the JWT for the user to determine permissions.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816343",
        "topic": "Topic 4",
        "pregunta": "DRAG DROP -\nYou are developing an application to securely transfer data between on-premises file systems and Azure Blob storage. The application stores keys, secrets, and certificates in Azure Key Vault. The application uses the Azure Key Vault APIs.\nThe application must allow recovery of an accidental deletion of the key vault or key vault objects. Key vault objects must be retained for 90 days after deletion.\nYou need to protect the key vault and key vault objects.\nWhich Azure Key Vault feature should you use? To answer, drag the appropriate features to the correct actions. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0033400001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0033400002.png",
        "respuestas": []
    },
    {
        "id": "816344",
        "topic": "Topic 4",
        "pregunta": "You provide an Azure API Management managed web service to clients. The back-end web service implements HTTP Strict Transport Security (HSTS).\nEvery request to the backend service must include a valid HTTP authorization header.\nYou need to configure the Azure API Management instance with an authentication policy.\nWhich two policies can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
        "respuestaCorrecta": "CD",
        "respuestas": [
            "A. Basic Authentication",
            "B. Digest Authentication",
            "C. Certificate Authentication",
            "D. OAuth Client Credential Grant"
        ]
    },
    {
        "id": "816345",
        "topic": "Topic 4",
        "pregunta": "DRAG DROP -\nYou are developing an ASP.NET Core website that can be used to manage photographs which are stored in Azure Blob Storage containers.\nUsers of the website authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou implement role-based access control (RBAC) role permissions on the containers that store photographs. You assign users to RBAC roles.\nYou need to configure the website's Azure AD Application so that user's permissions can be used with the Azure Blob containers.\nHow should you configure the application? To answer, drag the appropriate setting to the correct location. Each setting can be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0033600001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0033600002.png",
        "respuestas": []
    },
    {
        "id": "816346",
        "topic": "Topic 4",
        "pregunta": "HOTSPOT -\nYou are developing an ASP.NET Core app that includes feature flags which are managed by Azure App Configuration. You create an Azure App Configuration store named AppFeatureFlagStore that contains a feature flag named Export.\nYou need to update the app to meet the following requirements:\n✑ Use the Export feature in the app without requiring a restart of the app.\n✑ Validate users before users are allowed access to secure resources.\n✑ Permit users to access secure resources.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0033800001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0033900001.png",
        "respuestas": []
    },
    {
        "id": "816347",
        "topic": "Topic 4",
        "pregunta": "You have an application that includes an Azure Web app and several Azure Function apps. Application secrets including connection strings and certificates are stored in Azure Key Vault.\nSecrets must not be stored in the application or application runtime environment. Changes to Azure Active Directory (Azure AD) must be minimized.\nYou need to design the approach to loading application secrets.\nWhat should you do?\n",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. Create a single user-assigned Managed Identity with permission to access Key Vault and configure each App Service to use that Managed Identity.",
            "B. Create a single Azure AD Service Principal with permission to access Key Vault and use a client secret from within the App Services to access Key Vault.",
            "C. Create a system assigned Managed Identity in each App Service with permission to access Key Vault.",
            "D. Create an Azure AD Service Principal with Permissions to access Key Vault for each App Service and use a certificate from within the App Services to access Key Vault."
        ]
    },
    {
        "id": "816348",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.\nIf the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.\nYou need to store the intake forms according to the requirements.\nSolution:\n1. Create an Azure Key Vault key named skey.\n2. Encrypt the intake forms using the public key portion of skey.\n3. Store the encrypted data in Azure Blob storage.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816349",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.\nIf the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.\nYou need to store the intake forms according to the requirements.\nSolution:\n1. Create an Azure Cosmos DB database with Storage Service Encryption enabled.\n2. Store the intake forms in the Azure Cosmos DB database.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816350",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.\nIf the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.\nYou need to store the intake forms according to the requirements.\nSolution: Store the intake forms as Azure Key Vault secrets.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816351",
        "topic": "Topic 4",
        "pregunta": "HOTSPOT -\nYou plan to deploy a new application to a Linux virtual machine (VM) that is hosted in Azure.\nThe entire VM must be secured at rest by using industry-standard encryption technology to address organizational security and compliance requirements.\nYou need to configure Azure Disk Encryption for the VM.\nHow should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0034400001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0034500001.jpg",
        "respuestas": []
    },
    {
        "id": "816352",
        "topic": "Topic 4",
        "pregunta": "Your company is developing an Azure API hosted in Azure.\nYou need to implement authentication for the Azure API to access other Azure resources. You have the following requirements:\n✑ All API calls must be authenticated.\n✑ Callers to the API must not send credentials to the API.\nWhich authentication mechanism should you use?\n",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. Basic",
            "B. Anonymous",
            "C. Managed identity",
            "D. Client certificate"
        ]
    },
    {
        "id": "816353",
        "topic": "Topic 4",
        "pregunta": "DRAG DROP -\nYou are developing an application. You have an Azure user account that has access to two subscriptions.\nYou need to retrieve a storage account key secret from Azure Key Vault.\nIn which order should you arrange the PowerShell commands to develop the solution? To answer, move all commands from the list of commands to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0034900001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0035000001.png",
        "respuestas": []
    },
    {
        "id": "816354",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop Azure solutions.\nYou must grant a virtual machine (VM) access to specific resource groups in Azure Resource Manager.\nYou need to obtain an Azure Resource Manager access token.\nSolution: Use an X.509 certificate to authenticate the VM with Azure Resource Manager.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816355",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop Azure solutions.\nYou must grant a virtual machine (VM) access to specific resource groups in Azure Resource Manager.\nYou need to obtain an Azure Resource Manager access token.\nSolution: Use the Reader role-based access control (RBAC) role to authenticate the VM with Azure Resource Manager.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816356",
        "topic": "Topic 4",
        "pregunta": "HOTSPOT -\nYou are building a website that is used to review restaurants. The website will use an Azure CDN to improve performance and add functionality to requests.\nYou build and deploy a mobile app for Apple iPhones. Whenever a user accesses the website from an iPhone, the user must be redirected to the app store.\nYou need to implement an Azure CDN rule that ensures that iPhone users are redirected to the app store.\nHow should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0035300001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0035400001.png",
        "respuestas": []
    },
    {
        "id": "816357",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.\nYou need to configure authorization.\nSolution:\n✑ Configure and use Integrated Windows Authentication in the website.\n✑ In the website, query Microsoft Graph API to load the groups to which the user is a member.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816358",
        "topic": "Topic 4",
        "pregunta": "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop Azure solutions.\nYou must grant a virtual machine (VM) access to specific resource groups in Azure Resource Manager.\nYou need to obtain an Azure Resource Manager access token.\nSolution: Run the Invoke-RestMethod cmdlet to make a request to the local managed identity for Azure resources endpoint.\nDoes the solution meet the goal?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Yes",
            "B. No"
        ]
    },
    {
        "id": "816359",
        "topic": "Topic 4",
        "pregunta": "HOTSPOT -\nYou are building a website to access project data related to teams within your organization. The website does not allow anonymous access. Authentication is performed using an Azure Active Directory (Azure AD) app named internal.\nThe website has the following authentication requirements:\n✑ Azure AD users must be able to login to the website.\n✑ Personalization of the website must be based on membership in Active Directory groups.\nYou need to configure the application's manifest to meet the authentication requirements.\nHow should you configure the manifest? To answer, select the appropriate configuration in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0035800001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0035900001.png",
        "respuestas": []
    },
    {
        "id": "816360",
        "topic": "Topic 4",
        "pregunta": "You develop an app that allows users to upload photos and videos to Azure storage. The app uses a storage REST API call to upload the media to a blob storage account named Account1. You have blob storage containers named Container1 and Container2.\nUploading of videos occurs on an irregular basis.\nYou need to copy specific blobs from Container1 to Container2 when a new video is uploaded.\nWhat should you do?\n",
        "respuestaCorrecta": "B",
        "respuestas": [
            "A. Copy blobs to Container2 by using the Put Blob operation of the Blob Service REST API",
            "B. Create an Event Grid topic that uses the Start-AzureStorageBlobCopy cmdlet",
            "C. Use AzCopy with the Snapshot switch to copy blobs to Container2",
            "D. Download the blob to a virtual machine and then upload the blob to Container2"
        ]
    },
    {
        "id": "816361",
        "topic": "Topic 4",
        "pregunta": "You are developing an ASP.NET Core website that uses Azure FrontDoor. The website is used to build custom weather data sets for researchers. Data sets are downloaded by users as Comma Separated Value (CSV) files. The data is refreshed every 10 hours.\nSpecific files must be purged from the FrontDoor cache based upon Response Header values.\nYou need to purge individual assets from the Front Door cache.\nWhich type of cache purge should you use?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. single path",
            "B. wildcard",
            "C. root domain"
        ]
    },
    {
        "id": "816362",
        "topic": "Topic 4",
        "pregunta": "Your company is developing an Azure API.\nYou need to implement authentication for the Azure API. You have the following requirements:\nAll API calls must be secure.\n\n✑ Callers to the API must not send credentials to the API.\nWhich authentication mechanism should you use?\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0036100004.png",
        "respuestaCorrecta": "C",
        "respuestas": [
            "A. Basic",
            "B. Anonymous",
            "C. Managed identity",
            "D. Client certificate"
        ]
    },
    {
        "id": "816363",
        "topic": "Topic 4",
        "pregunta": "You are a developer for a SaaS company that offers many web services.\nAll web services for the company must meet the following requirements:\n✑ Use API Management to access the services\n✑ Use OpenID Connect for authentication\n✑ Prevent anonymous usage\nA recent security audit found that several web services can be called without any authentication.\nWhich API Management policy should you implement?\n",
        "respuestaCorrecta": "D",
        "respuestas": [
            "A. jsonp",
            "B. authentication-certificate",
            "C. check-header",
            "D. validate-jwt"
        ]
    },
    {
        "id": "816364",
        "topic": "Topic 4",
        "pregunta": "DRAG DROP -\nContoso, Ltd. provides an API to customers by using Azure API Management (APIM). The API authorizes users with a JWT token.\nYou must implement response caching for the APIM gateway. The caching mechanism must detect the user ID of the client that accesses data for a given location and cache the response for that user ID.\nYou need to add the following policies to the policies file:\n✑ a set-variable policy to store the detected user identity\n✑ a cache-lookup-value policy\n✑ a cache-store-value policy\n✑ a find-and-replace policy to update the response body with the user profile information\nTo which policy section should you add the policies? To answer, drag the appropriate sections to the correct policies. Each section may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0036400001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0036500001.jpg",
        "respuestas": []
    },
    {
        "id": "816365",
        "topic": "Topic 4",
        "pregunta": "DRAG DROP -\nYou are developing an Azure solution.\nYou need to develop code to access a secret stored in Azure Key Vault.\nHow should you complete the code segment? To answer, drag the appropriate code segments to the correct location. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0036700001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0036700002.png",
        "respuestas": []
    },
    {
        "id": "816366",
        "topic": "Topic 4",
        "pregunta": "You are developing an Azure App Service REST API.\nThe API must be called by an Azure App Service web app. The API must retrieve and update user profile information stored in Azure Active Directory (Azure AD).\nYou need to configure the API to make the updates.\nWhich two tools should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
        "respuestaCorrecta": "AC",
        "respuestas": [
            "A. Microsoft Graph API",
            "B. Microsoft Authentication Library (MSAL)",
            "C. Azure API Management",
            "D. Microsoft Azure Security Center",
            "E. Microsoft Azure Key Vault SDK"
        ]
    },
    {
        "id": "816367",
        "topic": "Topic 4",
        "pregunta": "You develop a REST API. You implement a user delegation SAS token to communicate with Azure Blob storage.\nThe token is compromised.\nYou need to revoke the token.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
        "respuestaCorrecta": "AB",
        "respuestas": [
            "A. Revoke the delegation key.",
            "B. Delete the stored access policy.",
            "C. Regenerate the account key.",
            "D. Remove the role assignment for the security principle."
        ]
    },
    {
        "id": "816368",
        "topic": "Topic 4",
        "pregunta": "DRAG DROP -\nYou are developing an Azure-hosted application that must use an on-premises hardware security module (HSM) key.\nThe key must be transferred to your existing Azure Key Vault by using the Bring Your Own Key (BYOK) process.\nYou need to securely transfer the key to Azure Key Vault.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0037000001.jpg",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0037000002.jpg",
        "respuestas": []
    },
    {
        "id": "816369",
        "topic": "Topic 4",
        "pregunta": "You develop and deploy an Azure Logic app that calls an Azure Function app. The Azure Function app includes an OpenAPI (Swagger) definition and uses an\nAzure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).\nThe Azure Logic app must securely access the Azure Blob storage account. Azure AD resources must remain if the Azure Logic app is deleted.\nYou need to secure the Azure Logic app.\nWhat should you do?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. Create a user-assigned managed identity and assign role-based access controls.",
            "B. Create an Azure AD custom role and assign the role to the Azure Blob storage account.",
            "C. Create an Azure Key Vault and issue a client certificate.",
            "D. Create a system-assigned managed identity and issue a client certificate.",
            "E. Create an Azure AD custom role and assign role-based access controls."
        ]
    },
    {
        "id": "816370",
        "topic": "Topic 4",
        "pregunta": "HOTSPOT -\nYou are developing an application that uses a premium block blob storage account. You are optimizing costs by automating Azure Blob Storage access tiers.\nYou apply the following policy rules to the storage account. You must determine the implications of applying the rules to the data. (Line numbers are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0037300001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0037400002.png",
        "respuestas": []
    },
    {
        "id": "816371",
        "topic": "Topic 4",
        "pregunta": "You are developing a solution that will use a multi-partitioned Azure Cosmos DB database. You plan to use the latest Azure Cosmos DB SDK for development.\nThe solution must meet the following requirements:\n✑ Send insert and update operations to an Azure Blob storage account.\n✑ Process changes to all partitions immediately.\n✑ Allow parallelization of change processing.\nYou need to process the Azure Cosmos DB operations.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n",
        "respuestaCorrecta": "AC",
        "respuestas": [
            "A. Create an Azure App Service API and implement the change feed estimator of the SDK. Scale the API by using multiple Azure App Service instances.",
            "B. Create a background job in an Azure Kubernetes Service and implement the change feed feature of the SDK.",
            "C. Create an Azure Function to use a trigger for Azure Cosmos DB. Configure the trigger to connect to the container.",
            "D. Create an Azure Function that uses a FeedIterator object that processes the change feed by using the pull model on the container. Use a FeedRange object to parallelize the processing of the change feed across multiple functions."
        ]
    },
    {
        "id": "816372",
        "topic": "Topic 4",
        "pregunta": "HOTSPOT -\nYou have an Azure Web app that uses Cosmos DB as a data store. You create a CosmosDB container by running the following PowerShell script:\n$resourceGroupName = \"testResourceGroup\"\n$accountName = \"testCosmosAccount\"\n$databaseName = \"testDatabase\"\n$containerName = \"testContainer\"\n$partitionKeyPath = \"/EmployeeId\"\n$autoscaleMaxThroughput = 5000\n\nNew-AzCosmosDBSqlContainer -\n-ResourceGroupName $resourceGroupName\n-AccountName $accountName\n-DatabaseName $databaseName\n-Name $containerName\n-PartitionKeyKind Hash\n-PartitionKeyPath $partitionKeyPath\n-AutoscaleMaxThroughput $autoscaleMaxThroughput\nYou create the following queries that target the container:\nSELECT * FROM c WHERE c.EmployeeId > '12345'\nSELECT * FROM c WHERE c.UserID = '12345'\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0037800001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0037800002.png",
        "respuestas": []
    },
    {
        "id": "816373",
        "topic": "Topic 4",
        "pregunta": "HOTSPOT -\nYou are developing a web application that makes calls to the Microsoft Graph API. You register the application in the Azure portal and upload a valid X509 certificate.\nYou create an appsettings.json file containing the certificate name, client identifier for the application, and the tenant identifier of the Azure Active Directory (Azure\nAD). You create a method named ReadCertificate to return the X509 certificate by name.\nYou need to implement code that acquires a token by using the certificate.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0038000001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0038000002.png",
        "respuestas": []
    },
    {
        "id": "816374",
        "topic": "Topic 4",
        "pregunta": "HOTSPOT -\nYou develop a containerized application. You plan to deploy the application to a new Azure Container instance by using a third-party continuous integration and continuous delivery (CI/CD) utility.\nThe deployment must be unattended and include all application assets. The third-party utility must only be able to push and pull images from the registry. The authentication must be managed by Azure Active Directory (Azure AD). The solution must use the principle of least privilege.\nYou need to ensure that the third-party utility can access the registry.\nWhich authentication options should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
        "imgPregunta": "https://www.examtopics.com/assets/media/exam-media/04273/0038200001.png",
        "respuestaCorrecta": "",
        "imgRespuesta": "https://www.examtopics.com/assets/media/exam-media/04273/0038300001.png",
        "respuestas": []
    },
    {
        "id": "816375",
        "topic": "Topic 4",
        "pregunta": "You deploy an Azure App Service web app. You create an app registration for the app in Azure Active Directory (Azure AD) and Twitter.\nThe app must authenticate users and must use SSL for all communications. The app must use Twitter as the identity provider.\nYou need to validate the Azure AD request in the app code.\nWhat should you validate?\n",
        "respuestaCorrecta": "A",
        "respuestas": [
            "A. ID token header",
            "B. ID token signature",
            "C. HTTP response code",
            "D. Tenant ID"
        ]
    }
]