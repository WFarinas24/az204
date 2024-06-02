export const data = [
  {
    id: '816230',
    topic: 'Topic 1',
    pregunta: 'You have two Hyper-V hosts named Host1 and Host2. Host1 has an Azure virtual machine named VM1 that was deployed by using a custom Azure Resource\nManager template.\nYou need to move VM1 to Host2.\nWhat should you do?\n',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. From the Update management blade, click Enable.',
      'B. From the Overview blade, move VM1 to a different subscription.',
      'C. From the Redeploy blade, click Redeploy.',
      'D. From the Profile blade, modify the usage location.'
    ]
  },
  {
    id: '816231',
    topic: 'Topic 1',
    pregunta: 'DRAG DROP -\nYou have downloaded an Azure Resource Manager template to deploy numerous virtual machines. The template is based on a current virtual machine, but must be adapted to reference an administrative password.\nYou need to make sure that the password is not stored in plain text.\nYou are preparing to create the necessary components to achieve your goal.\nWhich of the following should you create to achieve your goal? Answer by dragging the correct option from the list to the answer area.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0000300001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0000400001.jpg',
    respuestas: []
  },
  {
    id: '816232',
    topic: 'Topic 1',
    pregunta: 'Your company has an Azure Kubernetes Service (AKS) cluster that you manage from an Azure AD-joined device. The cluster is located in a resource group.\nDevelopers have created an application named MyApp. MyApp was packaged into a container image.\nYou need to deploy the YAML manifest file for the application.\nSolution: You install the Azure CLI on the device and run the kubectl apply `"f myapp.yaml command.\nDoes this meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816233',
    topic: 'Topic 1',
    pregunta: 'Your company has an Azure Kubernetes Service (AKS) cluster that you manage from an Azure AD-joined device. The cluster is located in a resource group.\nDevelopers have created an application named MyApp. MyApp was packaged into a container image.\nYou need to deploy the YAML manifest file for the application.\nSolution: You install the docker client on the device and run the docker run -it microsoft/azure-cli:0.10.17 command.\nDoes this meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816234',
    topic: 'Topic 1',
    pregunta: 'Your company has a web app named WebApp1.\nYou use the WebJobs SDK to design a triggered App Service background task that automatically invokes a function in the code every time new data is received in a queue.\nYou are preparing to configure the service processes a queue data item.\nWhich of the following is the service you should use?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Logic Apps',
      'B. WebJobs',
      'C. Flow',
      'D. Functions'
    ]
  },
  {
    id: '816235',
    topic: 'Topic 1',
    pregunta: 'Your company has an Azure subscription.\nYou need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set.\nYou need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.\nWhich of the following is the value that you should configure for the platformFaultDomainCount property?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. 10',
      'B. 30',
      'C. Min Value',
      'D. Max Value'
    ]
  },
  {
    id: '816236',
    topic: 'Topic 1',
    pregunta: 'Your company has an Azure subscription.\nYou need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set.\nYou need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.\nWhich of the following is the value that you should configure for the platformUpdateDomainCount property?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. 10',
      'B. 20',
      'C. 30',
      'D. 40'
    ]
  },
  {
    id: '816237',
    topic: 'Topic 1',
    pregunta: 'DRAG DROP -\nYou are creating an Azure Cosmos DB account that makes use of the SQL API. Data will be added to the account every day by a web application.\nYou need to ensure that an email notification is sent when information is received from IoT devices, and that compute cost is reduced.\nYou decide to deploy a function app.\nWhich of the following should you configure the function app to use? Answer by dragging the correct options from the list to the answer area.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0000900001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0001000001.jpg',
    respuestas: []
  },
  {
    id: '816238',
    topic: 'Topic 1',
    pregunta: 'This question requires that you evaluate the underlined text to determine if it is correct.\nYou company has an on-premises deployment of MongoDB, and an Azure Cosmos DB account that makes use of the MongoDB API.\nYou need to devise a strategy to migrate MongoDB to the Azure Cosmos DB account.\nYou include the Data Management Gateway tool in your migration strategy.\nInstructions: Review the underlined text. If it makes the statement correct, select `No change required.` If the statement is incorrect, select the answer choice that makes the statement correct.\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. No change required',
      'B. mongorestore',
      'C. Azure Storage Explorer',
      'D. AzCopy'
    ]
  },
  {
    id: '816239',
    topic: 'Topic 1',
    pregunta: 'You are developing an e-Commerce Web App.\nYou want to use Azure Key Vault to ensure that sign-ins to the e-Commerce Web App are secured by using Azure App Service authentication and Azure Active\nDirectory (AAD).\nWhat should you do on the e-Commerce Web App?\n',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Run the az keyvault secret command.',
      'B. Enable Azure AD Connect.',
      'C. Enable Managed Service Identity (MSI).',
      'D. Create an Azure AD service principal.'
    ]
  },
  {
    id: '816240',
    topic: 'Topic 1',
    pregunta: 'This question requires that you evaluate the underlined text to determine if it is correct.\nYour Azure Active Directory Azure (Azure AD) tenant has an Azure subscription linked to it.\nYour developer has created a mobile application that obtains Azure AD access tokens using the OAuth 2 implicit grant type.\nThe mobile application must be registered in Azure AD.\nYou require a redirect URI from the developer for registration purposes.\nInstructions: Review the underlined text. If it makes the statement correct, select `No change is needed.` If the statement is incorrect, select the answer choice that makes the statement correct.\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. No change required.',
      'B. a secret',
      'C. a login hint',
      'D. a client ID'
    ]
  },
  {
    id: '816241',
    topic: 'Topic 1',
    pregunta: 'You are creating an Azure key vault using PowerShell. Objects deleted from the key vault must be kept for a set period of 90 days.\nWhich two of the following parameters must be used in conjunction to meet the requirement? (Choose two.)\n',
    respuestaCorrecta: 'BD',
    respuestas: [
      'A. EnabledForDeployment',
      'B. EnablePurgeProtection',
      'C. EnabledForTemplateDeployment',
      'D. EnableSoftDelete'
    ]
  },
  {
    id: '816242',
    topic: 'Topic 1',
    pregunta: 'HOTSPOT -\nYou have an Azure Active Directory (Azure AD) tenant.\nYou want to implement multi-factor authentication by making use of a conditional access policy. The conditional access policy must be applied to all users when they access the Azure portal.\nWhich three settings should you configure? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0001500001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0001700001.png',
    respuestas: []
  },
  {
    id: '816243',
    topic: 'Topic 1',
    pregunta: 'You manage an Azure SQL database that allows for Azure AD authentication.\nYou need to make sure that database developers can connect to the SQL database via Microsoft SQL Server Management Studio (SSMS). You also need to make sure the developers use their on-premises Active Directory account for authentication. Your strategy should allow for authentication prompts to be kept to a minimum.\nWhich of the following should you implement?\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0001900001.jpg',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Azure AD token.',
      'B. Azure Multi-Factor authentication.',
      'C. Active Directory integrated authentication.',
      'D. OATH software tokens.'
    ]
  },
  {
    id: '816244',
    topic: 'Topic 1',
    pregunta: 'You are developing an application to transfer data between on-premises file servers and Azure Blob storage. The application stores keys, secrets, and certificates in Azure Key Vault and makes use of the Azure Key Vault APIs.\nYou want to configure the application to allow recovery of an accidental deletion of the key vault or key vault objects for 90 days after deletion.\nWhat should you do?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Run the Add-AzKeyVaultKey cmdlet.',
      'B. Run the az keyvault update --enable-soft-delete true --enable-purge-protection true CLI.',
      'C. Implement virtual network service endpoints for Azure Key Vault.',
      'D. Run the az keyvault update --enable-soft-delete false CLI.'
    ]
  },
  {
    id: '816245',
    topic: 'Topic 1',
    pregunta: 'HOTSPOT -\nYou have developed a Web App for your company. The Web App provides services and must run in multiple regions.\nYou want to be notified whenever the Web App uses more than 85 percent of the available CPU cores over a 5 minute period. Your solution must minimize costs.\nWhich command should you use? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0002100001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0002200001.jpg',
    respuestas: []
  },
  {
    id: '816246',
    topic: 'Topic 1',
    pregunta: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.\nYou need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.\nSolution: You include the use of Azure Redis Cache in your design.\nDoes the solution meet the goal?\n",
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816247',
    topic: 'Topic 1',
    pregunta: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.\nYou need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.\nSolution: You include the use of an Azure Content Delivery Network (CDN) in your design.\nDoes the solution meet the goal?\n",
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816248',
    topic: 'Topic 1',
    pregunta: "Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.\nYou need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.\nSolution: You include the use of a Storage Area Network (SAN) in your design.\nDoes the solution meet the goal?\n",
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816249',
    topic: 'Topic 1',
    pregunta: 'You develop a Web App on a tier D1 app service plan.\nYou notice that page load times increase during periods of peak traffic.\nYou want to implement automatic scaling when CPU load is above 80 percent. Your solution must minimize costs.\nWhat should you do first?\n',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Enable autoscaling on the Web App.',
      'B. Switch to the Premium App Service tier plan.',
      'C. Switch to the Standard App Service tier plan.',
      'D. Switch to the Azure App Services consumption plan.'
    ]
  },
  {
    id: '816250',
    topic: 'Topic 1',
    pregunta: "Your company's Azure subscription includes an Azure Log Analytics workspace.\nYour company has a hundred on-premises servers that run either Windows Server 2012 R2 or Windows Server 2016, and is linked to the Azure Log Analytics workspace. The Azure Log Analytics workspace is set up to gather performance counters associated with security from these linked servers.\nYou must configure alerts based on the information gathered by the Azure Log Analytics workspace.\nYou have to make sure that alert rules allow for dimensions, and that alert creation time should be kept to a minimum. Furthermore, a single alert notification must be created when the alert is created and when the alert is resolved.\nYou need to make use of the necessary signal type when creating the alert rules.\nWhich of the following is the option you should use?\n",
    respuestaCorrecta: 'C',
    respuestas: [
      'A. The Activity log signal type.',
      'B. The Application Log signal type.',
      'C. The Metric signal type.',
      'D. The Audit Log signal type.'
    ]
  },
  {
    id: '816251',
    topic: 'Topic 1',
    pregunta: 'You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers.\nYou want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to accommodation.\nYou want the application to allow customers to search the index by using regular expressions.\nWhat should you do?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Configure the SearchMode property of the SearchParameters class.',
      'B. Configure the QueryType property of the SearchParameters class.',
      'C. Configure the Facets property of the SearchParameters class.',
      'D. Configure the Filter property of the SearchParameters class.'
    ]
  },
  {
    id: '816252',
    topic: 'Topic 1',
    pregunta: 'You are a developer at your company.\nYou need to update the definitions for an existing Logic App.\nWhat should you use?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. the Enterprise Integration Pack (EIP)',
      'B. the Logic App Code View',
      'C. the API Connections',
      'D. the Logic Apps Designer'
    ]
  },
  {
    id: '816253',
    topic: 'Topic 1',
    pregunta: 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must configure back-end authentication for the API Management service instance.\nSolution: You configure Basic gateway credentials for the Azure resource.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816254',
    topic: 'Topic 1',
    pregunta: 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must configure back-end authentication for the API Management service instance.\nSolution: You configure Client cert gateway credentials for the HTTP(s) endpoint.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816255',
    topic: 'Topic 1',
    pregunta: 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must configure back-end authentication for the API Management service instance.\nSolution: You configure Basic gateway credentials for the HTTP(s) endpoint.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816256',
    topic: 'Topic 1',
    pregunta: 'Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.\nYou are developing a solution for a public facing API.\nThe API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.\nYou must configure back-end authentication for the API Management service instance.\nSolution: You configure Client cert gateway credentials for the Azure resource.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816257',
    topic: 'Topic 1',
    pregunta: 'You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers.\nYou want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to accommodation venues.\nYou want the application to list holiday accommodation venues that fall within a specific price range and are within a specified distance to an airport.\nWhat should you do?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Configure the SearchMode property of the SearchParameters class.',
      'B. Configure the QueryType property of the SearchParameters class.',
      'C. Configure the Facets property of the SearchParameters class.',
      'D. Configure the Filter property of the SearchParameters class.'
    ]
  },
  {
    id: '816258',
    topic: 'Topic 1',
    pregunta: 'You are a developer at your company.\nYou need to edit the workflows for an existing Logic App.\nWhat should you use?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. the Enterprise Integration Pack (EIP)',
      'B. the Logic App Code View',
      'C. the API Connections',
      'D. the Logic Apps Designer'
    ]
  },
  {
    id: '816259',
    topic: 'Topic 1',
    pregunta: "DRAG DROP -\nYou are a developer for a company that provides a bookings management service in the tourism industry. You are implementing Azure Search for the tour agencies listed in your company's solution.\nYou create the index in Azure Search. You now need to use the Azure Search .NET SDK to import the relevant data into the Azure Search service.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions from left to right and arrange them in the correct order.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0003200001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0003300001.jpg',
    respuestas: []
  },
  {
    id: '816260',
    topic: 'Topic 1',
    pregunta: 'You are developing an application that applies a set of governance policies for internal and external services, as well as for applications.\nYou develop a stateful ASP.NET Core 2.1 web application named PolicyApp and deploy it to an Azure App Service Web App. The PolicyApp reacts to events from\nAzure Event Grid and performs policy actions based on those events.\nYou have the following requirements:\n✑ Authentication events must be used to monitor users when they sign in and sign out.\n✑ All authentication events must be processed by PolicyApp.\n✑ Sign outs must be processed as fast as possible.\nWhat should you do?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Create a new Azure Event Grid subscription for all authentication events. Use the subscription to process sign-out events.',
      'B. Create a separate Azure Event Grid handler for sign-in and sign-out events.',
      'C. Create separate Azure Event Grid topics and subscriptions for sign-in and sign-out events.',
      'D. Add a subject prefix to sign-out events. Create an Azure Event Grid subscription. Configure the subscription to use the subjectBeginsWith filter.'
    ]
  },
  {
    id: '816261',
    topic: 'Topic 1',
    pregunta: 'HOTSPOT -\nYou are developing a C++ application that compiles to a native application named process.exe. The application accepts images as input and returns images in one of the following image formats: GIF, PNG, or JPEG.\nYou must deploy the application as an Azure Function.\nYou need to configure the function and host json files.\nHow should you complete the json files? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0003600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0003700001.png',
    respuestas: []
  },
  {
    id: '860774',
    topic: 'Topic 1',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an Azure Static Web app that contains training materials for a tool company. Each tool’s training material is contained in a static web page that is linked from the tool’s publicly available description page.\n\nA user must be authenticated using Azure AD prior to viewing training.\n\nYou need to ensure that the user can view training material pages after authentication.\n\nHow should you complete the configuration file? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image377.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image378.png',
    respuestas: []
  },
  {
    id: '860775',
    topic: 'Topic 1',
    pregunta: 'HOTSPOT\n-\n\nYou are authoring a set of nested Azure Resource Manager templates to deploy Azure resources. You author an Azure Resource Manager template named mainTemplate.json that contains the following linked templates: linkedTemplate1.json, linkedTemplate2.json.\n\nYou add parameters to a parameters template file named mainTemplate.parameters,json. You save all templates on a local device in the C:\\templates\\ folder.\n\nYou have the following requirements:\n\n• Store the templates in Azure for later deployment.\n• Enable versioning of the templates.\n• Manage access to the templates by using Azure RBAC.\n• Ensure that users have read-only access to the templates.\n• Allow users to deploy the templates.\n\nYou need to store the templates in Azure.\n\nHow should you complete the command? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image379.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image380.png',
    respuestas: []
  },
  {
    id: '860776',
    topic: 'Topic 1',
    pregunta: 'HOTSPOT\n-\n\nYou are developing a service where customers can report news events from a browser using Azure Web PubSub. The service is implemented as an Azure Function App that uses the JSON WebSocket subprotocol to receive news events.\n\nYou need to implement the bindings for the Azure Function App.\n\nHow should you configure the binding? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image381.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image382.png',
    respuestas: []
  },
  {
    id: '860777',
    topic: 'Topic 1',
    pregunta: 'HOTSPOT\n-\n\nYou are building a software-as-a-service (SaaS) application that analyzes DNA data that will run on Azure virtual machines (VMs) in an availability zone. The data is stored on managed disks attached to the VM. The performance of the analysis is determined by the speed of the disk attached to the VM.\n\nYou have the following requirements:\n\n• The application must be able to quickly revert to the previous day’s data if a systemic error is detected.\n• The application must minimize downtime in the case of an Azure datacenter outage.\n\nYou need to provision the managed disk for the VM to maximize performance while meeting the requirements.\n\nWhich type of Azure Managed Disk should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image383.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image384.png',
    respuestas: []
  },
  {
    id: '860778',
    topic: 'Topic 1',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an application that includes two Docker containers.\n\nThe application must meet the following requirements:\n\n• The containers must not run as root.\n• The containers must be deployed to Azure Container Instances by using a YAML file.\n• The containers must share a lifecycle, resources, local network, and storage volume.\n• The storage volume must persist through container crashes.\n• The storage volume must be deployed on stop or restart of the containers.\n\nYou need to configure Azure Container Instances for the application.\n\nWhich configuration values should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image385.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image386.png',
    respuestas: []
  },
  {
    id: '816262',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou are implementing a software as a service (SaaS) ASP.NET Core web service that will run as an Azure Web App. The web service will use an on-premises\nSQL Server database for storage. The web service also includes a WebJob that processes data updates. Four customers will use the web service.\n✑ Each instance of the WebJob processes data for a single customer and must run as a singleton instance.\n✑ Each deployment must be tested by using deployment slots prior to serving production data.\n✑ Azure costs must be minimized.\n✑ Azure resources must be located in an isolated network.\nYou need to configure the App Service plan for the Web App.\nHow should you configure the App Service plan? To answer, select the appropriate settings in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0008800001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0008900001.jpg',
    respuestas: []
  },
  {
    id: '816263',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou are a developer for a software as a service (SaaS) company that uses an Azure Function to process orders. The Azure Function currently runs on an Azure\nFunction app that is triggered by an Azure Storage queue.\nYou are preparing to migrate the Azure Function to Kubernetes using Kubernetes-based Event Driven Autoscaling (KEDA).\nYou need to configure Kubernetes Custom Resource Definitions (CRD) for the Azure Function.\nWhich CRDs should you configure? To answer, drag the appropriate CRD types to the correct locations. Each CRD type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0009000001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0009100001.jpg',
    respuestas: []
  },
  {
    id: '816264',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou are creating a CLI script that creates an Azure web app and related services in Azure App Service. The web app uses the following variables:\n\nYou need to automatically deploy code from GitHub to the newly created web app.\nHow should you complete the script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0009200001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0009400001.jpg',
    respuestas: []
  },
  {
    id: '816265',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Trigger the photo processing from Blob storage events.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816266',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Update the web.config file to include the applicationInitialization configuration element. Specify custom initialization actions to run the scripts.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. No',
      'B. Yes'
    ]
  },
  {
    id: '816267',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Enable auto swap for the Testing slot. Deploy the app to the Testing slot.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. No',
      'B. Yes'
    ]
  },
  {
    id: '816268',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Disable auto swap. Update the app with a method named statuscheck to run the scripts. Re-enable auto swap and deploy the app to the Production slot.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. No',
      'B. Yes'
    ]
  },
  {
    id: '816269',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Convert the Azure Storage account to a BlockBlobStorage storage account.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816270',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou are developing an Azure Web App. You configure TLS mutual authentication for the web app.\nYou need to validate the client certificate in the web app. To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0010000001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0010100001.jpg',
    respuestas: []
  },
  {
    id: '816271',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou are developing a Docker/Go using Azure App Service Web App for Containers. You plan to run the container in an App Service on Linux. You identify a\nDocker container image to use.\nNone of your current resource groups reside in a location that supports Linux. You must minimize the number of resource groups required.\nYou need to create the application and perform an initial deployment.\nWhich three Azure CLI commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0010200001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0010300001.png',
    respuestas: []
  },
  {
    id: '816272',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nFourth Coffee has an ASP.NET Core web app that runs in Docker. The app is mapped to the www.fourthcoffee.com domain.\nFourth Coffee is migrating this application to Azure.\nYou need to provision an App Service Web App to host this docker image and map the custom domain to the App Service web app.\nA resource group named FourthCoffeePublicWebResourceGroup has been created in the WestUS region that contains an App Service Plan named\nAppServiceLinuxDockerPlan.\nWhich order should the CLI commands be used to develop the solution? To answer, move all of the Azure CLI commands from the list of commands to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0010500001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0010600001.jpg',
    respuestas: []
  },
  {
    id: '816273',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou are developing a serverless Java application on Azure. You create a new Azure Key Vault to work with secrets from a new Azure Functions application.\nThe application must meet the following requirements:\n✑ Reference the Azure Key Vault without requiring any changes to the Java code.\n✑ Dynamically add and remove instances of the Azure Functions host based on the number of incoming application events.\n✑ Ensure that instances are perpetually warm to avoid any cold starts.\n✑ Connect to a VNet.\n✑ Authentication to the Azure Key Vault instance must be removed if the Azure Function application is deleted.\nYou need to grant the Azure Functions application access to the Azure Key Vault.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0010800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0010900001.png',
    respuestas: []
  },
  {
    id: '816274',
    topic: 'Topic 2',
    pregunta: 'You develop a website. You plan to host the website in Azure. You expect the website to experience high traffic volumes after it is published.\nYou must ensure that the website remains available and responsive while minimizing cost.\nYou need to deploy the website.\nWhat should you do?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Deploy the website to a virtual machine. Configure the virtual machine to automatically scale when the CPU load is high.',
      'B. Deploy the website to an App Service that uses the Shared service tier. Configure the App Service plan to automatically scale when the CPU load is high.',
      'C. Deploy the website to a virtual machine. Configure a Scale Set to increase the virtual machine instance count when the CPU load is high.',
      'D. Deploy the website to an App Service that uses the Standard service tier. Configure the App Service plan to automatically scale when the CPU load is high.'
    ]
  },
  {
    id: '816275',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nA company is developing a Java web app. The web app code is hosted in a GitHub repository located at https://github.com/Contoso/webapp.\nThe web app must be evaluated before it is moved to production. You must deploy the initial code release to a deployment slot named staging.\nYou need to create the web app and deploy the code.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0011100001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0011200001.png',
    respuestas: []
  },
  {
    id: '816276',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou have a web service that is used to pay for food deliveries. The web service uses Azure Cosmos DB as the data store.\nYou plan to add a new feature that allows users to set a tip amount. The new feature requires that a property named tip on the document in Cosmos DB must be present and contain a numeric value.\nThere are many existing websites and mobile apps that use the web service that will not be updated to set the tip property for some time.\nHow should you complete the trigger?\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0011400001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0011500001.jpg',
    respuestas: []
  },
  {
    id: '816277',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Use the Durable Function async pattern to process the blob data.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816278',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Pass the HTTP trigger payload into an Azure Service Bus queue to be processed by a queue trigger function and return an immediate HTTP success response.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816279',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Configure the app to use an App Service hosting plan and enable the Always On setting.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816280',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Move photo processing to an Azure Function triggered from the blob upload.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816281',
    topic: 'Topic 2',
    pregunta: 'You are developing an application that uses Azure Blob storage.\nThe application must read the transaction logs of all the changes that occur to the blobs and the blob metadata in the storage account for auditing purposes. The changes must be in the order in which they occurred, include only create, update, delete, and copy operations and be retained for compliance reasons.\nYou need to process the transaction logs asynchronously.\nWhat should you do?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Process all Azure Blob storage events by using Azure Event Grid with a subscriber Azure Function app.',
      'B. Enable the change feed on the storage account and process all changes for available events.',
      'C. Process all Azure Storage Analytics logs for successful blob events.',
      'D. Use the Azure Monitor HTTP Data Collector API and scan the request body for successful blob events.'
    ]
  },
  {
    id: '816282',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and a series of application files including ContosoApp.dll.\nYou need to create a Dockerfile document that meets the following requirements:\n✑ Call setupScripts.ps1 when the container is built.\n✑ Run ContosoApp.dll when the container starts.\nThe Dockerfile document must be created in the same folder where ContosoApp.dll and setupScript.ps1 are stored.\nWhich five commands should you use to develop the solution? To answer, move the appropriate commands from the list of commands to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0012100001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0012100002.png',
    respuestas: []
  },
  {
    id: '816283',
    topic: 'Topic 2',
    pregunta: 'You are developing an Azure Function App that processes images that are uploaded to an Azure Blob container.\nImages must be processed as quickly as possible after they are uploaded, and the solution must minimize latency. You create code to process images when the\nFunction App is triggered.\nYou need to configure the Function App.\nWhat should you do?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Use an App Service plan. Configure the Function App to use an Azure Blob Storage input trigger.',
      'B. Use a Consumption plan. Configure the Function App to use an Azure Blob Storage trigger.',
      'C. Use a Consumption plan. Configure the Function App to use a Timer trigger.',
      'D. Use an App Service plan. Configure the Function App to use an Azure Blob Storage trigger.',
      'E. Use a Consumption plan. Configure the Function App to use an Azure Blob Storage input trigger.'
    ]
  },
  {
    id: '816284',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou are configuring a new development environment for a Java application.\nThe environment requires a Virtual Machine Scale Set (VMSS), several storage accounts, and networking components.\nThe VMSS must not be created until the storage accounts have been successfully created and an associated load balancer and virtual network is configured.\nHow should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0012400001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0012500001.png',
    respuestas: []
  },
  {
    id: '816285',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou are developing an Azure Function App by using Visual Studio. The app will process orders input by an Azure Web App. The web app places the order information into Azure Queue Storage.\nYou need to review the Azure Function App code shown below.\n\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0012700001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0012800001.png',
    respuestas: []
  },
  {
    id: '816286',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou are developing a solution for a hospital to support the following use cases:\n✑ The most recent patient status details must be retrieved even if multiple users in different locations have updated the patient record.\n✑ Patient health monitoring data retrieved must be the current version or the prior version.\n✑ After a patient is discharged and all charges have been assessed, the patient billing record contains the final charges.\nYou provision a Cosmos DB NoSQL database and set the default consistency level for the database account to Strong. You set the value for Indexing Mode to\nConsistent.\nYou need to minimize latency and any impact to the availability of the solution. You must override the default consistency level at the query level to meet the required consistency guarantees for the scenarios.\nWhich consistency levels should you implement? To answer, drag the appropriate consistency levels to the correct requirements. Each consistency level may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0012900004.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0012900005.png',
    respuestas: []
  },
  {
    id: '816287',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou are configuring a development environment for your team. You deploy the latest Visual Studio image from the Azure Marketplace to your Azure subscription.\nThe development environment requires several software development kits (SDKs) and third-party components to support application development across the organization. You install and customize the deployed virtual machine (VM) for your development team. The customized VM must be saved to allow provisioning of a new team member development environment.\nYou need to save the customized VM for future provisioning.\nWhich tools or services should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0013100001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0013100002.png',
    respuestas: []
  },
  {
    id: '816288',
    topic: 'Topic 2',
    pregunta: 'You are preparing to deploy a website to an Azure Web App from a GitHub repository. The website includes static content generated by a script.\nYou plan to use the Azure Web App continuous deployment feature.\nYou need to run the static generation script before the website starts serving traffic.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AD',
    respuestas: [
      'A. Add the path to the static content generation tool to WEBSITE_RUN_FROM_PACKAGE setting in the host.json file.',
      'B. Add a PreBuild target in the websites csproj project file that runs the static content generation script.',
      'C. Create a file named run.cmd in the folder /run that calls a script which generates the static content and deploys the website.',
      'D. Create a file named .deployment in the root of the repository that calls a script which generates the static content and deploys the website.'
    ]
  },
  {
    id: '816289',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou are developing an application to use Azure Blob storage. You have configured Azure Blob storage to include change feeds.\nA copy of your storage account must be created in another region. Data must be copied from the current storage account to the new storage account directly between the storage servers.\nYou need to create a copy of the storage account in another region and copy the data.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0013400001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0013400002.jpg',
    respuestas: []
  },
  {
    id: '816290',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou are preparing to deploy an Azure virtual machine (VM)-based application.\nThe VMs that run the application have the following requirements:\n✑ When a VM is provisioned the firewall must be automatically configured before it can access Azure resources.\n✑ Supporting services must be installed by using an Azure PowerShell script that is stored in Azure Storage.\nYou need to ensure that the requirements are met.\nWhich features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0013600001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0013600002.jpg',
    respuestas: []
  },
  {
    id: '816291',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nA company is developing a Node.js web app. The web app code is hosted in a GitHub repository located at https://github.com/TailSpinToys/webapp.\nThe web app must be reviewed before it is moved to production. You must deploy the initial code release to a deployment slot named review.\nYou need to create the web app and deploy the code.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0013700001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0013800001.jpg',
    respuestas: []
  },
  {
    id: '816292',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou are developing an application that needs access to an Azure virtual machine (VM).\nThe access lifecycle for the application must be associated with the VM service instance.\nYou need to enable managed identity for the VM.\nHow should you complete the PowerShell segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0013900001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0014000001.jpg',
    respuestas: []
  },
  {
    id: '816293',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Create an Azure Function app that uses the Consumption hosting model and that is triggered from the blob upload.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816294',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.\nYou need to ensure that scripts run and resources are available before a swap operation occurs.\nSolution: Update the app with a method named statuscheck to run the scripts. Update the app settings for the app. Set the\nWEBSITE_SWAP_WARMUP_PING_PATH and WEBSITE_SWAP_WARMUP_PING_STATUSES with a path to the new method and appropriate response codes.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. No',
      'B. Yes'
    ]
  },
  {
    id: '816295',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou create the following PowerShell script:\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0014200001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0014300002.png',
    respuestas: []
  },
  {
    id: '816296',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou are developing an Azure Function app.\nThe app must meet the following requirements:\n✑ Enable developers to write the functions by using the Rust language.\n✑ Declaratively connect to an Azure Blob Storage account.\nYou need to implement the app.\nWhich Azure Function app features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0014500001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0014500002.png',
    respuestas: []
  },
  {
    id: '816297',
    topic: 'Topic 2',
    pregunta: "HOTSPOT -\nYou are developing an ASP.NET Core web application. You plan to deploy the application to Azure Web App for Containers.\nThe application needs to store runtime diagnostic data that must be persisted across application restarts. You have the following code:\n\nYou need to configure the application settings so that diagnostic data is stored as required.\nHow should you configure the web app's settings? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0014600001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0014700002.jpg',
    respuestas: []
  },
  {
    id: '816298',
    topic: 'Topic 2',
    pregunta: 'You are developing a web app that is protected by Azure Web Application Firewall (WAF). All traffic to the web app is routed through an Azure Application\nGateway instance that is used by multiple web apps. The web app address is contoso.azurewebsites.net.\nAll traffic must be secured with SSL. The Azure Application Gateway instance is used by multiple web apps.\nYou need to configure the Azure Application Gateway for the web app.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0014900001.jpg',
    respuestaCorrecta: 'AD',
    respuestas: [
      "A. In the Azure Application Gateway's HTTP setting, enable the Use for App service setting.",
      'B. Convert the web app to run in an Azure App service environment (ASE).',
      'C. Add an authentication certificate for contoso.azurewebsites.net to the Azure Application Gateway.',
      "D. In the Azure Application Gateway's HTTP setting, set the value of the Override backend path option to contoso22.azurewebsites.net."
    ]
  },
  {
    id: '816299',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure\nStorage Blob storage. The storage account type is General-purpose V2.\nWhen photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.\nYou need to design the process that starts the photo processing.\nSolution: Use the Azure Blob Storage change feed to trigger photo processing.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816300',
    topic: 'Topic 2',
    pregunta: 'You are developing a web application that runs as an Azure Web App. The web application stores data in Azure SQL Database and stores files in an Azure\nStorage account. The web application makes HTTP requests to external services as part of normal operations.\nThe web application is instrumented with Application Insights. The external services are OpenTelemetry compliant.\nYou need to ensure that the customer ID of the signed in user is associated with all operations throughout the overall system.\nWhat should you do?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Add the customer ID for the signed in user to the CorrelationContext in the web application',
      'B. On the current SpanContext, set the TraceId to the customer ID for the signed in user',
      'C. Set the header Ocp-Apim-Trace to the customer ID for the signed in user',
      'D. Create a new SpanContext with the TraceFlags value set to the customer ID for the signed in user'
    ]
  },
  {
    id: '816301',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou are developing an Azure Function App. You develop code by using a language that is not supported by the Azure Function App host. The code language supports HTTP primitives.\nYou must deploy the code to a production Azure Function App environment.\nYou need to configure the app for deployment.\nWhich configuration values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0015200001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0015300001.png',
    respuestas: []
  },
  {
    id: '816302',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou provision virtual machines (VMs) as development environments.\nOne VM does not start. The VM is stuck in a Windows update process. You attach the OS disk for the affected VM to a recovery VM.\nYou need to correct the issue.\nIn which order should you perform the actions? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0015500001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0015500002.jpg',
    respuestas: []
  },
  {
    id: '816303',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.\nThe app continues to time out after four minutes. The app must process the blob data.\nYou need to ensure the app does not time out and processes the blob data.\nSolution: Update the functionTimeout property of the host.json project file to 10 minutes.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816304',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT -\nYou are developing an Azure Durable Function based application that processes a list of input values. The application is monitored using a console application that retrieves JSON data from an Azure Function diagnostic endpoint.\nDuring processing a single instance of invalid input does not cause the function to fail. Invalid input must be available to the monitoring application.\nYou need to implement the Azure Durable Function and the monitoring console application.\nHow should you complete the code segments? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0015800001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0015900001.jpg',
    respuestas: []
  },
  {
    id: '816305',
    topic: 'Topic 2',
    pregunta: 'You are developing an Azure Durable Function to manage an online ordering process.\nThe process must call an external API to gather product discount information.\nYou need to implement the Azure Durable Function.\nWhich Azure Durable Function types should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AD',
    respuestas: [
      'A. Orchestrator',
      'B. Entity',
      'C. Client',
      'D. Activity'
    ]
  },
  {
    id: '816306',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP -\nYou are authoring a set of nested Azure Resource Manager templates to deploy multiple Azure resources.\nThe templates must be tested before deployment and must follow recommended practices.\nYou need to validate and test the templates before deployment.\nWhich tools should you use? To answer, drag the appropriate tools to the correct requirements. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0016200001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0016200002.png',
    respuestas: []
  },
  {
    id: '860779',
    topic: 'Topic 2',
    pregunta: 'You develop Azure Durable Functions to manage vehicle loans.\n\nThe loan process includes multiple actions that must be run in a specified order. One of the actions includes a customer credit check process, which may require multiple days to process.\n\nYou need to implement Azure Durable Functions for the loan process.\n\nWhich Azure Durable Functions type should you use?',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. orchestrator',
      'B. client',
      'C. entity',
      'D. activity'
    ]
  },
  {
    id: '860780',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an Azure Function app.\n\nAll functions in the app meet the following requirements:\n\n• Run until either a successful run or until 10 run attempts occur.\n• Ensure that there are at least 20 seconds between attempts for up to 15 minutes.\n\nYou need to configure the host.json file.\n\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image387.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image388.png',
    respuestas: []
  },
  {
    id: '860781',
    topic: 'Topic 2',
    pregunta: 'You develop Azure Web Apps for a commercial diving company. Regulations require that all divers fill out a health questionnaire every 15 days after each diving job starts.\n\nYou need to configure the Azure Web Apps so that the instance count scales up when divers are filling out the questionnaire and scales down after they are complete.\n\nYou need to configure autoscaling.\n\nWhat are two possible auto scaling configurations to achieve this goal? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'CD',
    respuestas: [
      'A. Recurrence profile',
      'B. CPU usage-based autoscaling',
      'C. Fixed date profile',
      'D. Predictive autoscaling'
    ]
  },
  {
    id: '882059',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an online game that allows players to vote for their favorite photo that illustrates a word. The game is built by using Azure Functions and uses durable entities to track the vote count.\n\nThe voting window is 30 seconds. You must minimize latency.\n\nYou need to implement the Azure Function for voting.\n\nHow should you complete the code? To answer, select the appropriate options in the answer area.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image422.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image423.png',
    respuestas: []
  },
  {
    id: '890548',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT\n-\n\nYou have an App Service plan named asp1 based on the Free pricing tier.\n\nYou plan to use asp1 to implement an Azure Function app with a queue trigger. Your solution must minimize cost.\n\nYou need to identify the configuration options that will meet the requirements.\n\nWhich value should you configure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image443.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image444.png',
    respuestas: []
  },
  {
    id: '890549',
    topic: 'Topic 2',
    pregunta: 'DRAG DROP\n-\n\nYou are developing several microservices to run on Azure Container Apps.\n\nThe microservices must allow HTTPS access by using a custom domain.\n\nYou need to configure the custom domain in Azure Container Apps.\n\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image445.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image446.png',
    respuestas: []
  },
  {
    id: '890550',
    topic: 'Topic 2',
    pregunta: 'You are developing several microservices to run on Azure Container Apps. External HTTP ingress traffic has been enabled for the microservices.\n\nThe microservices must be deployed to the same virtual network and write logs to the same Log Analytics workspace.\n\nYou need to deploy the microservices.\n\nWhat should you do?',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Enable single revision mode.',
      'B. Use a separate environment for each container.',
      'C. Use a private container registry image and single image for all containers.',
      'D. Use a single environment for all containers.',
      'E. Enable multiple revision mode.'
    ]
  },
  {
    id: '892685',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT\n-\n\nYou are developing several microservices to run on Azure Container Apps. External HTTP ingress traffic has been enabled for the microservices.\n\nA deployed microservice must be updated to allow users to test new features. You have the following requirements:\n\n• Enable and maintain a single URL for the updated microservice to provide to test users.\n• Update the microservice that corresponds to the current microservice version.\n\nYou need to configure Azure Container Apps.\n\nWhich features should you configure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image463.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image464.png',
    respuestas: []
  },
  {
    id: '900741',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT\n-\n\nYou plan to develop an Azure Functions app with an HTTP trigger.\n\nThe app must support the following requirements:\n\n• Event-driven scaling\n• Ability to use custom Linux images for function execution\n\nYou need to identify the app’s hosting plan and the maximum amount of time that the app function can take to respond to incoming requests.\n\nWhich configuration setting values should you use? To answer, select the appropriate values in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image478.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image479.png',
    respuestas: []
  },
  {
    id: '900742',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT\n-\n\nYou develop a Python application for image rendering. The application uses GPU resources to optimize rendering processes.\n\nYou have the following requirements:\n\n• The application must be deployed to a Linux container.\n• The container must be stopped when the image rendering is complete.\n• The solution must minimize cost.\n\nYou need to deploy the application to Azure.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image480.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image481.png',
    respuestas: []
  },
  {
    id: '900743',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT\n-\n\nYou plan to develop an Azure Functions app with an Azure Blob Storage trigger. The app will be used infrequently, with a limited duration of individual executions.\n\nThe app must meet the following requirements:\n\n• Event-driven scaling\n• Support for deployment slots\n• Minimize costs\n\nYou need to identify the hosting plan and the maximum duration when executing the app.\n\nWhich configuration setting values should you use? To answer, select the appropriate values in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image482.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image483.png',
    respuestas: []
  },
  {
    id: '907840',
    topic: 'Topic 2',
    pregunta: 'You are developing an ASP.NET Core app hosted in Azure App Service.\n\nThe app requires custom claims to be returned from Microsoft Entra ID for user authorization. The claims must be removed when the app registration is removed.\n\nYou need to include the custom claims in the user access token.\n\nWhat should you do?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Require the https://graph.microsoft.com/.default scope during authentication.',
      'B. Configure the app to use the OAuth 2.0 authorization code flow.',
      'C. Implement custom middleware to retrieve role information from Azure AD.',
      'D. Add the groups to the groupMembershipClaims attribute in the app manifest.',
      'E. Add the roles to the appRoles attribute in the app manifest.'
    ]
  },
  {
    id: '907841',
    topic: 'Topic 2',
    pregunta: 'You are developing a microservice to run on Azure Container Apps for a company. External HTTP ingress traffic has been enabled.\n\nThe company requires that updates to the microservice must not cause downtime.\n\nYou need to deploy an update to the microservices.\n\nWhat should you do?',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Enable single revision mode.',
      'B. Use multiple environments for each container.',
      'C. Use a private container registry and single image for all containers.',
      'D. Use a single environment for all containers.',
      'E. Enable multiple revision mode.'
    ]
  },
  {
    id: '907842',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT\n-\n\nA company uses Azure Container Apps. A container app named App1 resides in a resource group named RG1.\n\nThe company requires testing of updates to App1.\n\nYou enable multiple revision modes on App1.\n\nYou need to ensure traffic is routed to each revision of App1.\n\nHow should you complete the code segment?\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image500.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image501.png',
    respuestas: []
  },
  {
    id: '907843',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou deploy an Azure Container Apps app and disable ingress on the container app.\n\nUsers report that they are unable to access the container app. You investigate and observe that the app has scaled to 0 instances.\n\nYou need to resolve the issue with the container app.\n\nSolution: Enable ingress, create an HTTP scale rule, and apply the rule to the container app.\n\nDoes the solution meet the goal?',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '907844',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou deploy an Azure Container Apps app and disable ingress on the container app.\n\nUsers report that they are unable to access the container app. You investigate and observe that the app has scaled to 0 instances.\n\nYou need to resolve the issue with the container app.\n\nSolution: Enable ingress, create a custom scale rule, and apply the rule to the container app.\n\nDoes the solution meet the goal?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '907845',
    topic: 'Topic 2',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou deploy an Azure Container Apps app and disable ingress on the container app.\n\nUsers report that they are unable to access the container app. You investigate and observe that the app has scaled to 0 instances.\n\nYou need to resolve the issue with the container app.\n\nSolution: Enable ingress and configure the minimum replicas to 1 for the container app.\n\nDoes the solution meet the goal?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '907846',
    topic: 'Topic 2',
    pregunta: 'HOTSPOT\n-\n\n\nCase study\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground\n-\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment\n-\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website\n-\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms\n-\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors\n-\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements\n-\n\nThe application components must meet the following requirements:\n\n\nCorporate website\n-\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms\n-\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors\n-\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff\n-\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity\n-\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues\n-\n\n\nCorporate website\n-\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors\n-\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to configure App Service to support the corporate website migration.\n\nWhich configuration should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image502.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image503.png',
    respuestas: []
  },
  {
    id: '816307',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are developing a solution that uses the Azure Storage Client library for .NET. You have the following code: (Line numbers are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0020500001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0020600002.png',
    respuestas: []
  },
  {
    id: '816308',
    topic: 'Topic 3',
    pregunta: 'You are building a website that uses Azure Blob storage for data storage. You configure Azure Blob storage lifecycle to move all blobs to the archive tier after 30 days.\nCustomers have requested a service-level agreement (SLA) for viewing data older than 30 days.\nYou need to document the minimum SLA for data recovery.\nWhich SLA should you use?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. at least two days',
      'B. between one and 15 hours',
      'C. at least one day',
      'D. between zero and 60 minutes'
    ]
  },
  {
    id: '816309',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are developing a ticket reservation system for an airline.\nThe storage solution for the application must meet the following requirements:\n✑ Ensure at least 99.99% availability and provide low latency.\n✑ Accept reservations even when localized network outages or other unforeseen failures occur.\n✑ Process reservations in the exact sequence as reservations are submitted to minimize overbooking or selling the same seat to multiple travelers.\n✑ Allow simultaneous and out-of-order reservations with a maximum five-second tolerance window.\nYou provision a resource group named airlineResourceGroup in the Azure South-Central US region.\nYou need to provision a SQL API Cosmos DB account to support the app.\nHow should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0020900001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0021100001.jpg',
    respuestas: []
  },
  {
    id: '816310',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are preparing to deploy a Python website to an Azure Web App using a container. The solution will use multiple containers in the same container group. The\nDockerfile that builds the container is as follows:\n\nYou build a container by using the following command. The Azure Container Registry instance named images is a private registry.\n\nThe user name and password for the registry is admin.\nThe Web App must always run the same version of the website regardless of future builds.\nYou need to create an Azure Web App to run the website.\nHow should you complete the commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0021300001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0021500001.jpg',
    respuestas: []
  },
  {
    id: '816311',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are developing a back-end Azure App Service that scales based on the number of messages contained in a Service Bus queue.\nA rule already exists to scale up the App Service when the average queue length of unprocessed and valid queue messages is greater than 1000.\nYou need to add a new rule that will continuously scale down the App Service as long as the scale up condition is not met.\nHow should you configure the Scale rule? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0021700001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0021900001.jpg',
    respuestas: []
  },
  {
    id: '816312',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP -\nYou have an application that uses Azure Blob storage.\nYou need to update the metadata of the blobs.\nWhich three methods should you use to develop the solution? To answer, move the appropriate methods from the list of methods to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0022100001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0022100002.jpg',
    respuestas: []
  },
  {
    id: '816313',
    topic: 'Topic 3',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce\n2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Event Grid. Configure the machine identifier as the partition key and enable capture.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816314',
    topic: 'Topic 3',
    pregunta: 'You develop Azure solutions.\nA .NET application needs to receive a message each time an Azure virtual machine finishes processing data. The messages must NOT persist after being processed by the receiving application.\nYou need to implement the .NET object that will receive the messages.\nWhich object should you use?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. QueueClient',
      'B. SubscriptionClient',
      'C. TopicClient',
      'D. CloudQueueClient'
    ]
  },
  {
    id: '816315',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP -\nYou are maintaining an existing application that uses an Azure Blob GPv1 Premium storage account. Data older than three months is rarely used.\nData newer than three months must be available immediately. Data older than a year must be saved but does not need to be available immediately.\nYou need to configure the account to support a lifecycle management rule that moves blob data to archive storage for data not modified in the last year.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0022400001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0022400002.jpg',
    respuestas: []
  },
  {
    id: '816316',
    topic: 'Topic 3',
    pregunta: 'You develop Azure solutions.\nYou must connect to a No-SQL globally-distributed database by using the .NET API.\nYou need to create an object to configure and execute requests in the database.\nWhich code segment should you use?\n',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. new Container(EndpointUri, PrimaryKey);',
      'B. new Database(EndpointUri, PrimaryKey);',
      'C. new CosmosClient(EndpointUri, PrimaryKey);'
    ]
  },
  {
    id: '816317',
    topic: 'Topic 3',
    pregunta: 'You have an existing Azure storage account that stores large volumes of data across multiple containers.\nYou need to copy all data from the existing storage account to a new storage account. The copy process must meet the following requirements:\n✑ Automate data movement.\n✑ Minimize user input required to perform the operation.\n✑ Ensure that the data movement process is recoverable.\nWhat should you use?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. AzCopy',
      'B. Azure Storage Explorer',
      'C. Azure portal',
      'D. .NET Storage Client Library'
    ]
  },
  {
    id: '816318',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP -\nYou are developing a web service that will run on Azure virtual machines that use Azure Storage. You configure all virtual machines to use managed identities.\nYou have the following requirements:\n✑ Secret-based authentication mechanisms are not permitted for accessing an Azure Storage account.\n✑ Must use only Azure Instance Metadata Service endpoints.\nYou need to write code to retrieve an access token to access Azure Storage. To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0022700003.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0022800001.jpg',
    respuestas: []
  },
  {
    id: '816319',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP -\nYou are developing a new page for a website that uses Azure Cosmos DB for data storage. The feature uses documents that have the following format:\n\nYou must display data for the new page in a specific order. You create the following query for the page:\n\nYou need to configure a Cosmos DB policy to support the query.\nHow should you configure the policy? To answer, drag the appropriate JSON segments to the correct locations. Each JSON segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0022900001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0023100001.png',
    respuestas: []
  },
  {
    id: '816320',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are building a traffic monitoring system that monitors traffic along six highways. The system produces time series analysis-based reports for each highway.\nData from traffic sensors are stored in Azure Event Hub.\nTraffic data is consumed by four departments. Each department has an Azure Web App that displays the time series-based reports and contains a WebJob that processes the incoming data from Event Hub. All Web Apps run on App Service Plans with three instances.\nData throughput must be maximized. Latency must be minimized.\nYou need to implement the Azure Event Hub.\nWhich settings should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0023300001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0023400001.png',
    respuestas: []
  },
  {
    id: '816321',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP -\nYou are developing a microservices solution. You plan to deploy the solution to a multinode Azure Kubernetes Service (AKS) cluster.\nYou need to deploy a solution that includes the following features:\n✑ reverse proxy capabilities\n✑ configurable traffic routing\n✑ TLS termination with a custom certificate\nWhich components should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0023500004.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0023600001.jpg',
    respuestas: []
  },
  {
    id: '816322',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP -\nYou are implementing an order processing system. A point of sale application publishes orders to topics in an Azure Service Bus queue. The Label property for the topic includes the following data:\n\nThe system has the following requirements for subscriptions:\n\nYou need to implement filtering and maximize throughput while evaluating filters.\nWhich filter types should you implement? To answer, drag the appropriate filter types to the correct subscriptions. Each filter type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0023700001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0023900001.png',
    respuestas: []
  },
  {
    id: '816323',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP -\nYour company has several websites that use a company logo image. You use Azure Content Delivery Network (CDN) to store the static image.\nYou need to determine the correct process of how the CDN and the Point of Presence (POP) server will distribute the image and list the items in the correct order.\nIn which order do the actions occur? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0024100001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0024100002.jpg',
    respuestas: []
  },
  {
    id: '816324',
    topic: 'Topic 3',
    pregunta: 'You are developing an Azure Cosmos DB solution by using the Azure Cosmos DB SQL API. The data includes millions of documents. Each document may contain hundreds of properties.\nThe properties of the documents do not contain distinct values for partitioning. Azure Cosmos DB must scale individual containers in the database to meet the performance needs of the application by spreading the workload evenly across all partitions over time.\nYou need to select a partition key.\nWhich two partition keys can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'DE',
    respuestas: [
      'A. a single property value that does not appear frequently in the documents',
      'B. a value containing the collection name',
      'C. a single property value that appears frequently in the documents',
      'D. a concatenation of multiple property values with a random suffix appended',
      'E. a hash suffix appended to a property value'
    ]
  },
  {
    id: '816325',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are developing an Azure-hosted e-commerce web application. The application will use Azure Cosmos DB to store sales orders. You are using the latest SDK to manage the sales orders in the database.\nYou create a new Azure Cosmos DB instance. You include a valid endpoint and valid authorization key to an appSettings.json file in the code project.\nYou are evaluating the following application code: (Line number are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0024400001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0024500002.jpg',
    respuestas: []
  },
  {
    id: '816326',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP -\nYou develop an Azure solution that uses Cosmos DB.\nThe current Cosmos DB container must be replicated and must use a partition key that is optimized for queries.\nYou need to implement a change feed processor solution.\nWhich change feed processor components should you use? To answer, drag the appropriate components to the correct requirements. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view the content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0024700001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0024700002.png',
    respuestas: []
  },
  {
    id: '816327',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are developing a web application that will use Azure Storage. Older data will be less frequently used than more recent data.\nYou need to configure data storage for the application. You have the following requirements:\n✑ Retain copies of data for five years.\n✑ Minimize costs associated with storing data that is over one year old.\n✑ Implement Zone Redundant Storage for application data.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0024800004.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0024900001.png',
    respuestas: []
  },
  {
    id: '816328',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nA company develops a series of mobile games. All games use a single leaderboard service.\nYou have the following requirements:\n✑ Code must be scalable and allow for growth.\n✑ Each record must consist of a playerId, gameId, score, and time played.\n✑ When users reach a new high score, the system will save the new score using the SaveScore function below.\nEach game is assigned an Id based on the series title.\n\nYou plan to store customer information in Azure Cosmos DB. The following data already exists in the database:\n\nYou develop the following code to save scores in the data store. (Line numbers are included for reference only.)\n\nYou develop the following code to query the database. (Line numbers are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0024900005.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0025100002.png',
    respuestas: []
  },
  {
    id: '816329',
    topic: 'Topic 3',
    pregunta: 'You develop and deploy a web application to Azure App Service. The application accesses data stored in an Azure Storage account. The account contains several containers with several blobs with large amounts of data. You deploy all Azure resources to a single region.\nYou need to move the Azure Storage account to the new region. You must copy all data to the new region.\nWhat should you do first?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Export the Azure Storage account Azure Resource Manager template',
      'B. Initiate a storage account failover',
      'C. Configure object replication for all blobs',
      'D. Use the AzCopy command line tool',
      'E. Create a new Azure Storage account in the current region',
      'F. Create a new subscription in the current region'
    ]
  },
  {
    id: '816330',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are developing an application to collect the following telemetry data for delivery drivers: first name, last name, package count, item id, and current location coordinates. The app will store the data in Azure Cosmos DB.\nYou need to configure Azure Cosmos DB to query the data.\nWhich values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0025400001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0025500001.png',
    respuestas: []
  },
  {
    id: '816331',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP -\nYou are implementing an Azure solution that uses Azure Cosmos DB and the latest Azure Cosmos DB SDK. You add a change feed processor to a new container instance.\nYou attempt to read a batch of 100 documents. The process fails when reading one of the documents. The solution must monitor the progress of the change feed processor instance on the new container as the change feed is read. You must prevent the change feed processor from retrying the entire batch when one document cannot be read.\nYou need to implement the change feed processor to read the documents.\nWhich features should you use? To answer, drag the appropriate features to the cored requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each cored selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0025600001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0025700001.jpg',
    respuestas: []
  },
  {
    id: '816332',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are developing an application that uses a premium block blob storage account. The application will process a large volume of transactions daily. You enable\nBlob storage versioning.\nYou are optimizing costs by automating Azure Blob Storage access tiers. You apply the following policy rules to the storage account. (Line numbers are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0025800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0025900002.png',
    respuestas: []
  },
  {
    id: '816333',
    topic: 'Topic 3',
    pregunta: 'An organization deploys Azure Cosmos DB.\nYou need to ensure that the index is updated as items are created, updated, or deleted.\nWhat should you do?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Set the indexing mode to Lazy.',
      'B. Set the value of the automatic property of the indexing policy to False.',
      'C. Set the value of the EnableScanInQuery option to True.',
      'D. Set the indexing mode to Consistent.'
    ]
  },
  {
    id: '816334',
    topic: 'Topic 3',
    pregunta: 'You are developing a .Net web application that stores data in Azure Cosmos DB. The application must use the Core API and allow millions of reads and writes.\nThe Azure Cosmos DB account has been created with multiple write regions enabled. The application has been deployed to the East US2 and Central US regions.\nYou need to update the application to support multi-region writes.\nWhat are two possible ways to achieve this goal? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'CD',
    respuestas: [
      'A. Update the ConnectionPolicy class for the Cosmos client and populate the PreferredLocations property based on the geo-proximity of the application.',
      'B. Update Azure Cosmos DB to use the Strong consistency level. Add indexed properties to the container to indicate region.',
      'C. Update the ConnectionPolicy class for the Cosmos client and set the UseMultipleWriteLocations property to true.',
      'D. Create and deploy a custom conflict resolution policy.',
      'E. Update Azure Cosmos DB to use the Session consistency level. Send the SessionToken property value from the FeedResponse object of the write action to the end-user by using a cookie.'
    ]
  },
  {
    id: '816335',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are developing a solution to store documents in Azure Blob storage. Customers upload documents to multiple containers. Documents consist of PDF, CSV,\nMicrosoft Office format and plain text files.\nThe solution must process millions of documents across hundreds of containers. The solution must meet the following requirements:\n✑ Documents must be categorized by a customer identifier as they are uploaded to the storage account.\n✑ Allow filtering by the customer identifier.\n✑ Allow searching of information contained within a document\n✑ Minimize costs.\nYou create and configure a standard general-purpose v2 storage account to support the solution.\nYou need to implement the solution.\nWhat should you implement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0026300001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0026400001.png',
    respuestas: []
  },
  {
    id: '816336',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nYou are developing a web application by using the Azure SDK. The web application accesses data in a zone-redundant BlockBlobStorage storage account.\nThe application must determine whether the data has changed since the application last read the data. Update operations must use the latest data changes when writing data to the storage account.\nYou need to implement the update operations.\nWhich values should you use? To answer, select the appropriate option in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0026600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0026700001.png',
    respuestas: []
  },
  {
    id: '816337',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nAn organization deploys a blob storage account. Users take multiple snapshots of the blob storage account over time.\nYou need to delete all snapshots of the blob storage account. You must not delete the blob storage account itself.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0026800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0026900001.jpg',
    respuestas: []
  },
  {
    id: '816338',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT -\nAn organization deploys a blob storage account. Users take multiple snapshots of the blob storage account over time.\nYou need to delete all snapshots of the blob storage account. You must not delete the blob storage account itself.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0027000001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0027000002.jpg',
    respuestas: []
  },
  {
    id: '860782',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an application that monitors data added to an Azure Blob storage account.\n\nYou need to process each change made to the storage account.\n\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image389.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image390.png',
    respuestas: []
  },
  {
    id: '860783',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT\n-\n\nYou develop an application that sells AI generated images based on user input. You recently started a marketing campaign that displays unique ads every second day.\n\nSales data is stored in Azure Cosmos DB with the date of each sale being stored in a property named ‘whenFinished’.\n\nThe marketing department requires a view that shows the number of sales for each unique ad.\nYou need to implement the query for the view.\n\nHow should you complete the query? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image391.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image392.png',
    respuestas: []
  },
  {
    id: '860784',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT\n-\n\nYou implement an Azure solution to include Azure Cosmos DB, the latest Azure Cosmos DB SDK, and the Core (SQL) API. You also implement a change feed processor on a new container instance by using the Azure Functions trigger for Azure Cosmos DB.\n\nA large batch of documents continues to fail when reading one of the documents in the batch. The same batch of documents is continuously retried by the triggered function and a new batch of documents must be read.\n\nYou need to implement the change feed processor to read the documents.\n\nWhich feature should you implement? To answer, select the appropriate features in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image393.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image394.png',
    respuestas: []
  },
  {
    id: '860785',
    topic: 'Topic 3',
    pregunta: 'You are developing an application to store business-critical data in Azure Blob storage.\n\nThe application must meet the following requirements:\n\n• Data must not be modified or deleted for a user-specified interval.\n• Data must be protected from overwrites and deletes.\n• Data must be written once and allowed to be read many times.\n\nYou need to protect the data in the Azure Blob storage account.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'AF',
    respuestas: [
      'A. Configure a time-based retention policy for the storage account.',
      'B. Create an account shared-access signature (SAS).',
      'C. Enable the blob change feed for the storage account.',
      'D. Enable version-level immutability support for the storage account.',
      'E. Enable point-in-time restore for containers in the storage account.',
      'F. Create a service shared-access signature (SAS).'
    ]
  },
  {
    id: '860786',
    topic: 'Topic 3',
    pregunta: 'You are updating an application that stores data on Azure and uses Azure Cosmos DB for storage. The application stores data in multiple documents associated with a single username.\n\nThe application requires the ability to update multiple documents for a username in a single ACID operation.\n\nYou need to configure Azure Cosmos DB.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'CD',
    respuestas: [
      'A. Create a collection sharded on username to store documents.',
      'B. Configure Azure Cosmos DB to use the Gremlin API.',
      'C. Create an unsharded collection to store documents.',
      'D. Configure Azure Cosmos DB to use the MongoDB API.'
    ]
  },
  {
    id: '860787',
    topic: 'Topic 3',
    pregunta: 'You develop Azure solutions.\n\nYou must connect to a No-SQL globally-distributed database by using the .NET API.\n\nYou need to create an object to configure and execute requests in the database.\n\nWhich code segment should you use?',
    respuestaCorrecta: 'C',
    respuestas: [
      "A. database_name = 'MyDatabase'\ndatabase = client.create_database_if_not_exists(id=database_name)",
      'B. client = CosmosClient(endpoint, key)',
      "C. container_name = 'MyContainer'\ncontainer = database.create_container_if_not_exists(\nid=container_name, partition_key=PartitionKey(path=\"/lastName\"), offer_throughput=400 )"
    ]
  },
  {
    id: '882060',
    topic: 'Topic 3',
    pregunta: 'You develop a web application that provides access to legal documents that are stored on Azure Blob Storage with version-level immutability policies. Documents are protected with both time-based policies and legal hold policies. All time-based retention policies have the AllowProtectedAppendWrites property enabled.\n\nYou have a requirement to prevent the user from attempting to perform operations that would fail only when a legal hold is in effect and when all other policies are expired.\n\nYou need to meet the requirement.\n\nWhich two operations should you prevent? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'BD',
    respuestas: [
      'A. adding data to documents',
      'B. deleting documents',
      'C. creating documents',
      'D. overwriting existing documents'
    ]
  },
  {
    id: '882061',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT\n-\n\nYou provisioned an Azure Cosmos DB for NoSQL account named account1 with the default consistency level.\n\nYou plan to configure the consistency level on a per request basis. The level needs to be set for consistent prefix for read and write operations to account1.\n\nYou need to identify the resulting consistency level for read and write operations.\n\nWhich levels should you configure? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image424.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image425.png',
    respuestas: []
  },
  {
    id: '882062',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP\n-\n\nYou are developing an application to store millions of images in Azure blob storage. The images are uploaded to an Azure blob storage container named companyimages contained in an Azure blob storage account named companymedia. The stored images are uploaded with multiple blob index tags across multiple blobs in the container.\n\nYou must find all blobs whose tags match a search expression in the container. The search expression must evaluate an index tag named status with a value of final.\n\nYou need to construct the GET method request URI.\n\nHow should you complete the URI? To answer, drag the appropriate parameters to the correct request URI targets. Each parameter may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image426.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image427.png',
    respuestas: []
  },
  {
    id: '890551',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT\n-\n\nYou develop two Python scripts to process data.\n\nThe Python scripts must be deployed to two, separate Linux containers running in an Azure Container Instance container group. The containers must access external data by using the Server Message Block (SMB) protocol. Containers in the container group must run only once.\n\nYou need to configure the Azure Container Instance.\n\nWhich configuration value should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image447.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image448.png',
    respuestas: []
  },
  {
    id: '890552',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT\n-\n\nYou are developing a static website hosted on Azure Blob Storage. You create a storage account and enable static website hosting.\n\nThe website must support the following requirements:\n\n• Custom domain name\n• Custom header values for all responses\n• Custom SSL certificate\n\nYou need to implement the static website.\n\nWhat should you configure? To answer, select the appropriate values in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image449.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image450.png',
    respuestas: []
  },
  {
    id: '890553',
    topic: 'Topic 3',
    pregunta: 'You are developing an inventory tracking solution. The solution includes an Azure Function app containing multiple functions triggered by Azure Cosmos DB. You plan to deploy the solution to multiple Azure regions.\n\nThe solution must meet the following requirements:\n\n• Item results from Azure Cosmos DS must return the most recent committed version of an item.\n• Items written to Azure Cosmos DB must provide ordering guarantees.\n\nYou need to configure the consistency level for the Azure Cosmos DB deployments.\n\nWhich consistency level should you use?',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. consistent prefix',
      'B. eventual',
      'C. bounded staleness',
      'D. strong',
      'E. session'
    ]
  },
  {
    id: '890554',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an application that runs in several customer Azure Kubernetes Service clusters. Within each cluster, a pod runs that collects performance data to be analyzed later. A large amount of data is collected so saving latency must be minimized.\n\nThe performance data must be stored so that pod restarts do not impact the stored data. Write latency should be minimized.\n\nYou need to configure blob storage.\n\nHow should you complete the YAML configuration? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image451.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image452.png',
    respuestas: []
  },
  {
    id: '892275',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT\n-\n\n\nCase study\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground\n-\n\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\n\nCurrent environment\n-\n\n\nCorporate website\n-\n\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\n\nRetail Store Locations\n-\n\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\n\nRequirements\n-\n\nThe application components must meet the following requirements:\n\n\nCorporate website\n-\n\n• Secure the website by using SSL.\n• Minimize costs for data storage and hosting.\n• Implement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\n• Distribute the website content globally for local use.\n• Implement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\n• The website must have 99.95 percent uptime.\n\n\nRetail store locations\n-\n\n• Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\n• Audit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\n\nDelivery services\n-\n\n• Store service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\n• Store delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\n\nInventory services\n-\n\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to\ninclude read-only access to the data.\n\n\nSecurity\n-\n\n• All Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\n• Authentication and authorization must use Azure AD and services must use managed identities where possible.\n\n\nIssues\n-\n\n\nRetail Store Locations\n-\n\n• You must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\n• Azure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\n\n\nYou need to implement the delivery service telemetry data.\n\nHow should you configure the solution? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image461.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image462.png',
    respuestas: []
  },
  {
    id: '892686',
    topic: 'Topic 3',
    pregunta: 'You create and publish a new Azure App Service web app.\n\nUser authentication and authorization must use Azure Active Directory (Azure AD).\n\nYou need to configure authentication and authorization.\n\nWhat should you do first?',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Add an identity provider.',
      'B. Map an existing custom DNS name.',
      'C. Create and configure a new app setting.',
      'D. Add a private certificate.',
      'E. Create and configure a managed identity.'
    ]
  },
  {
    id: '892687',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP\n-\n\nYou have an Azure Cosmos DB for NoSQL account.\n\nYou plan to develop two apps named App1 and App2 that will use the change feed functionality to track changes to containers. App1 will use the pull model and App2 will use the push model.\n\nYou need to choose the method to track the most recently processed change in App1 and App2.\n\nWhich component should you use? To answer, drag the appropriate components to the correct apps. Each component may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image465.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image466.png',
    respuestas: []
  },
  {
    id: '900744',
    topic: 'Topic 3',
    pregunta: 'You have a Linux container-based console application that uploads image files from customer sites all over the world. A back-end system that runs on Azure virtual machines processes the images by using the Azure Blobs API.\n\nYou are not permitted to make changes to the application.\n\nSome customer sites only have phone-based internet connections.\n\nYou need to configure the console application to access the images.\n\nWhat should you use?',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Azure BlobFuse',
      'B. Azure Disks',
      'C. Azure Storage Network File System (NFS) 3.0 support',
      'D. Azure Files'
    ]
  },
  {
    id: '900745',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP\n-\n\nYou are developing several microservices named serviceA, serviceB, and serviceC. You deploy the microservices to a new Azure Container Apps environment.\n\nYou have the following requirements:\n\n• The microservices must persist data to storage.\n• serviceA must persist data only visible to the current container and the storage must be restricted to the amount of disk space available in the container.\n• serviceB must persist data for the lifetime of the replica and allow multiple containers in the replica to mount the same storage location.\n• serviceC must persist data beyond the lifetime of the replica while allowing multiple containers to access the storage and enable per object permissions.\n\nYou need to configure storage for each microservice.\n\nWhich storage type should you use? To answer, drag the appropriate storage types to the correct microservices. Each storage type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image484.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image485.png',
    respuestas: []
  },
  {
    id: '907847',
    topic: 'Topic 3',
    pregunta: 'DRAG DROP\n-\n\nYou are developing a web service that will run on Azure virtual machines that use Azure Storage. You configure all virtual machines to use managed identities.\n\nYou have the following requirements:\n\n• Secret-based authentication mechanisms are not permitted for accessing an Azure Storage account.\n• Must use only Azure Instance Metadata Service endpoints.\n\nYou need to write code to retrieve an access token to access Azure Storage. To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image504.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image505.png',
    respuestas: []
  },
  {
    id: '907848',
    topic: 'Topic 3',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an Azure Function app.\n\nThe Azure Function app must enable a WebHook to read an image from Azure Blob Storage and create a new Azure Cosmos DB document.\n\nYou need to implement the Azure Function app.\n\nWhich configuration should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image506.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image507.png',
    respuestas: []
  },
  {
    id: '907849',
    topic: 'Topic 3',
    pregunta: 'You create an Azure Cosmos DB for NoSQL database.\n\nYou plan to use the Azure Cosmos DB .NET SDK v3 API for NoSQL to upload the following files:\n\n\n\nYou receive the following error message when uploading the files: “413 Entity too large”.\n\nYou need to determine which files you can upload to the Azure Cosmos DB for NoSQL database.\n\nWhich files can you upload?',
    imgPregunta: 'https://img.examtopics.com/az-204/image508.png',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. File1, File2, File3, File4, and File5',
      'B. File1 and File2 only',
      'C. File1, File2, and File3 only',
      'D. File1, File2, File3, and File4 only',
      'E. File1 only'
    ]
  },
  {
    id: '816339',
    topic: 'Topic 4',
    pregunta: 'You are developing a Java application that uses Cassandra to store key and value data. You plan to use a new Azure Cosmos DB resource and the Cassandra\nAPI in the application. You create an Azure Active Directory (Azure AD) group named Cosmos DB Creators to enable provisioning of Azure Cosmos accounts, databases, and containers.\nThe Azure AD group must not be able to access the keys that are required to access the data.\nYou need to restrict access to the Azure AD group.\nWhich role-based access control should you use?\n',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. DocumentDB Accounts Contributor',
      'B. Cosmos Backup Operator',
      'C. Cosmos DB Operator',
      'D. Cosmos DB Account Reader'
    ]
  },
  {
    id: '816340',
    topic: 'Topic 4',
    pregunta: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.\nYou need to configure authorization.\nSolution: Configure the Azure Web App for the website to allow only authenticated requests and require Azure AD log on.\nDoes the solution meet the goal?\n",
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816341',
    topic: 'Topic 4',
    pregunta: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.\nYou need to configure authorization.\nSolution:\n✑ Create a new Azure AD application. In the application's manifest, set value of the groupMembershipClaims option to All.\n✑ In the website, use the value of the groups claim from the JWT for the user to determine permissions.\nDoes the solution meet the goal?\n",
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816342',
    topic: 'Topic 4',
    pregunta: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.\nYou need to configure authorization.\nSolution:\n✑ Create a new Azure AD application. In the application's manifest, define application roles that match the required permission levels for the application.\n✑ Assign the appropriate Azure AD group to each role. In the website, use the value of the roles claim from the JWT for the user to determine permissions.\nDoes the solution meet the goal?\n",
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816343',
    topic: 'Topic 4',
    pregunta: 'DRAG DROP -\nYou are developing an application to securely transfer data between on-premises file systems and Azure Blob storage. The application stores keys, secrets, and certificates in Azure Key Vault. The application uses the Azure Key Vault APIs.\nThe application must allow recovery of an accidental deletion of the key vault or key vault objects. Key vault objects must be retained for 90 days after deletion.\nYou need to protect the key vault and key vault objects.\nWhich Azure Key Vault feature should you use? To answer, drag the appropriate features to the correct actions. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0033400001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0033400002.png',
    respuestas: []
  },
  {
    id: '816344',
    topic: 'Topic 4',
    pregunta: 'You provide an Azure API Management managed web service to clients. The back-end web service implements HTTP Strict Transport Security (HSTS).\nEvery request to the backend service must include a valid HTTP authorization header.\nYou need to configure the Azure API Management instance with an authentication policy.\nWhich two policies can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AD',
    respuestas: [
      'A. Basic Authentication',
      'B. Digest Authentication',
      'C. Certificate Authentication',
      'D. OAuth Client Credential Grant'
    ]
  },
  {
    id: '816345',
    topic: 'Topic 4',
    pregunta: "DRAG DROP -\nYou are developing an ASP.NET Core website that can be used to manage photographs which are stored in Azure Blob Storage containers.\nUsers of the website authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou implement role-based access control (RBAC) role permissions on the containers that store photographs. You assign users to RBAC roles.\nYou need to configure the website's Azure AD Application so that user's permissions can be used with the Azure Blob containers.\nHow should you configure the application? To answer, drag the appropriate setting to the correct location. Each setting can be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0033600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0033600002.png',
    respuestas: []
  },
  {
    id: '816346',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou are developing an ASP.NET Core app that includes feature flags which are managed by Azure App Configuration. You create an Azure App Configuration store named AppFeatureFlagStore that contains a feature flag named Export.\nYou need to update the app to meet the following requirements:\n✑ Use the Export feature in the app without requiring a restart of the app.\n✑ Validate users before users are allowed access to secure resources.\n✑ Permit users to access secure resources.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0033800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0033900001.png',
    respuestas: []
  },
  {
    id: '816347',
    topic: 'Topic 4',
    pregunta: 'You have an application that includes an Azure Web app and several Azure Function apps. Application secrets including connection strings and certificates are stored in Azure Key Vault.\nSecrets must not be stored in the application or application runtime environment. Changes to Azure Active Directory (Azure AD) must be minimized.\nYou need to design the approach to loading application secrets.\nWhat should you do?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Create a single user-assigned Managed Identity with permission to access Key Vault and configure each App Service to use that Managed Identity.',
      'B. Create a single Azure AD Service Principal with permission to access Key Vault and use a client secret from within the App Services to access Key Vault.',
      'C. Create a system assigned Managed Identity in each App Service with permission to access Key Vault.',
      'D. Create an Azure AD Service Principal with Permissions to access Key Vault for each App Service and use a certificate from within the App Services to access Key Vault.'
    ]
  },
  {
    id: '816348',
    topic: 'Topic 4',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.\nIf the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.\nYou need to store the intake forms according to the requirements.\nSolution:\n1. Create an Azure Key Vault key named skey.\n2. Encrypt the intake forms using the public key portion of skey.\n3. Store the encrypted data in Azure Blob storage.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816349',
    topic: 'Topic 4',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.\nIf the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.\nYou need to store the intake forms according to the requirements.\nSolution:\n1. Create an Azure Cosmos DB database with Storage Service Encryption enabled.\n2. Store the intake forms in the Azure Cosmos DB database.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816350',
    topic: 'Topic 4',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a medical records document management website. The website is used to store scanned copies of patient intake forms.\nIf the stored intake forms are downloaded from storage by a third party, the contents of the forms must not be compromised.\nYou need to store the intake forms according to the requirements.\nSolution: Store the intake forms as Azure Key Vault secrets.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816351',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou plan to deploy a new application to a Linux virtual machine (VM) that is hosted in Azure.\nThe entire VM must be secured at rest by using industry-standard encryption technology to address organizational security and compliance requirements.\nYou need to configure Azure Disk Encryption for the VM.\nHow should you complete the Azure CLI commands? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0034400001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0034500001.jpg',
    respuestas: []
  },
  {
    id: '816352',
    topic: 'Topic 4',
    pregunta: 'Your company is developing an Azure API hosted in Azure.\nYou need to implement authentication for the Azure API to access other Azure resources. You have the following requirements:\n✑ All API calls must be authenticated.\n✑ Callers to the API must not send credentials to the API.\nWhich authentication mechanism should you use?\n',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Basic',
      'B. Anonymous',
      'C. Managed identity',
      'D. Client certificate'
    ]
  },
  {
    id: '816353',
    topic: 'Topic 4',
    pregunta: 'DRAG DROP -\nYou are developing an application. You have an Azure user account that has access to two subscriptions.\nYou need to retrieve a storage account key secret from Azure Key Vault.\nIn which order should you arrange the PowerShell commands to develop the solution? To answer, move all commands from the list of commands to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0034900001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0035000001.png',
    respuestas: []
  },
  {
    id: '816354',
    topic: 'Topic 4',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop Azure solutions.\nYou must grant a virtual machine (VM) access to specific resource groups in Azure Resource Manager.\nYou need to obtain an Azure Resource Manager access token.\nSolution: Use an X.509 certificate to authenticate the VM with Azure Resource Manager.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816355',
    topic: 'Topic 4',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop Azure solutions.\nYou must grant a virtual machine (VM) access to specific resource groups in Azure Resource Manager.\nYou need to obtain an Azure Resource Manager access token.\nSolution: Use the Reader role-based access control (RBAC) role to authenticate the VM with Azure Resource Manager.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816356',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou are building a website that is used to review restaurants. The website will use an Azure CDN to improve performance and add functionality to requests.\nYou build and deploy a mobile app for Apple iPhones. Whenever a user accesses the website from an iPhone, the user must be redirected to the app store.\nYou need to implement an Azure CDN rule that ensures that iPhone users are redirected to the app store.\nHow should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0035300001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0035400001.png',
    respuestas: []
  },
  {
    id: '816357',
    topic: 'Topic 4',
    pregunta: "Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing a website that will run as an Azure Web App. Users will authenticate by using their Azure Active Directory (Azure AD) credentials.\nYou plan to assign users one of the following permission levels for the website: admin, normal, and reader. A user's Azure AD group membership must be used to determine the permission level.\nYou need to configure authorization.\nSolution:\n✑ Configure and use Integrated Windows Authentication in the website.\n✑ In the website, query Microsoft Graph API to load the groups to which the user is a member.\nDoes the solution meet the goal?\n",
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816358',
    topic: 'Topic 4',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou develop Azure solutions.\nYou must grant a virtual machine (VM) access to specific resource groups in Azure Resource Manager.\nYou need to obtain an Azure Resource Manager access token.\nSolution: Run the Invoke-RestMethod cmdlet to make a request to the local managed identity for Azure resources endpoint.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816359',
    topic: 'Topic 4',
    pregunta: "HOTSPOT -\nYou are building a website to access project data related to teams within your organization. The website does not allow anonymous access. Authentication is performed using an Azure Active Directory (Azure AD) app named internal.\nThe website has the following authentication requirements:\n✑ Azure AD users must be able to login to the website.\n✑ Personalization of the website must be based on membership in Active Directory groups.\nYou need to configure the application's manifest to meet the authentication requirements.\nHow should you configure the manifest? To answer, select the appropriate configuration in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0035800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0035900001.png',
    respuestas: []
  },
  {
    id: '816360',
    topic: 'Topic 4',
    pregunta: 'You develop an app that allows users to upload photos and videos to Azure storage. The app uses a storage REST API call to upload the media to a blob storage account named Account1. You have blob storage containers named Container1 and Container2.\nUploading of videos occurs on an irregular basis.\nYou need to copy specific blobs from Container1 to Container2 when a new video is uploaded.\nWhat should you do?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Copy blobs to Container2 by using the Put Blob operation of the Blob Service REST API',
      'B. Create an Event Grid topic that uses the Start-AzureStorageBlobCopy cmdlet',
      'C. Use AzCopy with the Snapshot switch to copy blobs to Container2',
      'D. Download the blob to a virtual machine and then upload the blob to Container2'
    ]
  },
  {
    id: '816361',
    topic: 'Topic 4',
    pregunta: 'You are developing an ASP.NET Core website that uses Azure FrontDoor. The website is used to build custom weather data sets for researchers. Data sets are downloaded by users as Comma Separated Value (CSV) files. The data is refreshed every 10 hours.\nSpecific files must be purged from the FrontDoor cache based upon Response Header values.\nYou need to purge individual assets from the Front Door cache.\nWhich type of cache purge should you use?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. single path',
      'B. wildcard',
      'C. root domain'
    ]
  },
  {
    id: '816362',
    topic: 'Topic 4',
    pregunta: 'Your company is developing an Azure API.\nYou need to implement authentication for the Azure API. You have the following requirements:\nAll API calls must be secure.\n\n✑ Callers to the API must not send credentials to the API.\nWhich authentication mechanism should you use?\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0036100004.png',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Basic',
      'B. Anonymous',
      'C. Managed identity',
      'D. Client certificate'
    ]
  },
  {
    id: '816363',
    topic: 'Topic 4',
    pregunta: 'You are a developer for a SaaS company that offers many web services.\nAll web services for the company must meet the following requirements:\n✑ Use API Management to access the services\n✑ Use OpenID Connect for authentication\n✑ Prevent anonymous usage\nA recent security audit found that several web services can be called without any authentication.\nWhich API Management policy should you implement?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. jsonp',
      'B. authentication-certificate',
      'C. check-header',
      'D. validate-jwt'
    ]
  },
  {
    id: '816364',
    topic: 'Topic 4',
    pregunta: 'DRAG DROP -\nContoso, Ltd. provides an API to customers by using Azure API Management (APIM). The API authorizes users with a JWT token.\nYou must implement response caching for the APIM gateway. The caching mechanism must detect the user ID of the client that accesses data for a given location and cache the response for that user ID.\nYou need to add the following policies to the policies file:\n✑ a set-variable policy to store the detected user identity\n✑ a cache-lookup-value policy\n✑ a cache-store-value policy\n✑ a find-and-replace policy to update the response body with the user profile information\nTo which policy section should you add the policies? To answer, drag the appropriate sections to the correct policies. Each section may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0036400001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0036500001.jpg',
    respuestas: []
  },
  {
    id: '816365',
    topic: 'Topic 4',
    pregunta: 'DRAG DROP -\nYou are developing an Azure solution.\nYou need to develop code to access a secret stored in Azure Key Vault.\nHow should you complete the code segment? To answer, drag the appropriate code segments to the correct location. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0036700001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0036700002.png',
    respuestas: []
  },
  {
    id: '816366',
    topic: 'Topic 4',
    pregunta: 'You are developing an Azure App Service REST API.\nThe API must be called by an Azure App Service web app. The API must retrieve and update user profile information stored in Azure Active Directory (Azure AD).\nYou need to configure the API to make the updates.\nWhich two tools should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AB',
    respuestas: [
      'A. Microsoft Graph API',
      'B. Microsoft Authentication Library (MSAL)',
      'C. Azure API Management',
      'D. Microsoft Azure Security Center',
      'E. Microsoft Azure Key Vault SDK'
    ]
  },
  {
    id: '816367',
    topic: 'Topic 4',
    pregunta: 'You develop a REST API. You implement a user delegation SAS token to communicate with Azure Blob storage.\nThe token is compromised.\nYou need to revoke the token.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AD',
    respuestas: [
      'A. Revoke the delegation key.',
      'B. Delete the stored access policy.',
      'C. Regenerate the account key.',
      'D. Remove the role assignment for the security principle.'
    ]
  },
  {
    id: '816368',
    topic: 'Topic 4',
    pregunta: 'DRAG DROP -\nYou are developing an Azure-hosted application that must use an on-premises hardware security module (HSM) key.\nThe key must be transferred to your existing Azure Key Vault by using the Bring Your Own Key (BYOK) process.\nYou need to securely transfer the key to Azure Key Vault.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0037000001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0037000002.jpg',
    respuestas: []
  },
  {
    id: '816369',
    topic: 'Topic 4',
    pregunta: 'You develop and deploy an Azure Logic app that calls an Azure Function app. The Azure Function app includes an OpenAPI (Swagger) definition and uses an\nAzure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).\nThe Azure Logic app must securely access the Azure Blob storage account. Azure AD resources must remain if the Azure Logic app is deleted.\nYou need to secure the Azure Logic app.\nWhat should you do?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Create a user-assigned managed identity and assign role-based access controls.',
      'B. Create an Azure AD custom role and assign the role to the Azure Blob storage account.',
      'C. Create an Azure Key Vault and issue a client certificate.',
      'D. Create a system-assigned managed identity and issue a client certificate.',
      'E. Create an Azure AD custom role and assign role-based access controls.'
    ]
  },
  {
    id: '816370',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou are developing an application that uses a premium block blob storage account. You are optimizing costs by automating Azure Blob Storage access tiers.\nYou apply the following policy rules to the storage account. You must determine the implications of applying the rules to the data. (Line numbers are included for reference only.)\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0037300001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0037400002.png',
    respuestas: []
  },
  {
    id: '816371',
    topic: 'Topic 4',
    pregunta: 'You are developing a solution that will use a multi-partitioned Azure Cosmos DB database. You plan to use the latest Azure Cosmos DB SDK for development.\nThe solution must meet the following requirements:\n✑ Send insert and update operations to an Azure Blob storage account.\n✑ Process changes to all partitions immediately.\n✑ Allow parallelization of change processing.\nYou need to process the Azure Cosmos DB operations.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'CD',
    respuestas: [
      'A. Create an Azure App Service API and implement the change feed estimator of the SDK. Scale the API by using multiple Azure App Service instances.',
      'B. Create a background job in an Azure Kubernetes Service and implement the change feed feature of the SDK.',
      'C. Create an Azure Function to use a trigger for Azure Cosmos DB. Configure the trigger to connect to the container.',
      'D. Create an Azure Function that uses a FeedIterator object that processes the change feed by using the pull model on the container. Use a FeedRange object to parallelize the processing of the change feed across multiple functions.'
    ]
  },
  {
    id: '816372',
    topic: 'Topic 4',
    pregunta: "HOTSPOT -\nYou have an Azure Web app that uses Cosmos DB as a data store. You create a CosmosDB container by running the following PowerShell script:\n$resourceGroupName = \"testResourceGroup\"\n$accountName = \"testCosmosAccount\"\n$databaseName = \"testDatabase\"\n$containerName = \"testContainer\"\n$partitionKeyPath = \"/EmployeeId\"\n$autoscaleMaxThroughput = 5000\n\nNew-AzCosmosDBSqlContainer -\n-ResourceGroupName $resourceGroupName\n-AccountName $accountName\n-DatabaseName $databaseName\n-Name $containerName\n-PartitionKeyKind Hash\n-PartitionKeyPath $partitionKeyPath\n-AutoscaleMaxThroughput $autoscaleMaxThroughput\nYou create the following queries that target the container:\nSELECT * FROM c WHERE c.EmployeeId > '12345'\nSELECT * FROM c WHERE c.UserID = '12345'\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0037800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0037800002.png',
    respuestas: []
  },
  {
    id: '816373',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou are developing a web application that makes calls to the Microsoft Graph API. You register the application in the Azure portal and upload a valid X509 certificate.\nYou create an appsettings.json file containing the certificate name, client identifier for the application, and the tenant identifier of the Azure Active Directory (Azure\nAD). You create a method named ReadCertificate to return the X509 certificate by name.\nYou need to implement code that acquires a token by using the certificate.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0038000001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0038000002.png',
    respuestas: []
  },
  {
    id: '816374',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou develop a containerized application. You plan to deploy the application to a new Azure Container instance by using a third-party continuous integration and continuous delivery (CI/CD) utility.\nThe deployment must be unattended and include all application assets. The third-party utility must only be able to push and pull images from the registry. The authentication must be managed by Azure Active Directory (Azure AD). The solution must use the principle of least privilege.\nYou need to ensure that the third-party utility can access the registry.\nWhich authentication options should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0038200001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0038300001.png',
    respuestas: []
  },
  {
    id: '816375',
    topic: 'Topic 4',
    pregunta: 'You deploy an Azure App Service web app. You create an app registration for the app in Azure Active Directory (Azure AD) and Twitter.\nThe app must authenticate users and must use SSL for all communications. The app must use Twitter as the identity provider.\nYou need to validate the Azure AD request in the app code.\nWhat should you validate?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. ID token header',
      'B. ID token signature',
      'C. HTTP response code',
      'D. Tenant ID'
    ]
  },
  {
    id: '816376',
    topic: 'Topic 4',
    pregunta: 'A development team is creating a new REST API. The API will store data in Azure Blob storage. You plan to deploy the API to Azure App Service.\nDevelopers must access the Azure Blob storage account to develop the API for the next two months. The Azure Blob storage account must not be accessible by the developers after the two-month time period.\nYou need to grant developers access to the Azure Blob storage account.\nWhat should you do?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Generate a shared access signature (SAS) for the Azure Blob storage account and provide the SAS to all developers.',
      'B. Create and apply a new lifecycle management policy to include a last accessed date value. Apply the policy to the Azure Blob storage account.',
      'C. Provide all developers with the access key for the Azure Blob storage account. Update the API to include the Coordinated Universal Time (UTC) timestamp for the request header.',
      'D. Grant all developers access to the Azure Blob storage account by assigning role-based access control (RBAC) roles.'
    ]
  },
  {
    id: '816377',
    topic: 'Topic 4',
    pregunta: 'DRAG DROP -\nYou develop a web application.\nYou need to register the application with an active Azure Active Directory (Azure AD) tenant.\nWhich three actions should you perform in sequence? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0038600001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0038700001.jpg',
    respuestas: []
  },
  {
    id: '816378',
    topic: 'Topic 4',
    pregunta: 'You have a new Azure subscription. You are developing an internal website for employees to view sensitive data. The website uses Azure Active Directory (Azure\nAD) for authentication.\nYou need to implement multifactor authentication for the website.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'BC',
    respuestas: [
      'A. Configure the website to use Azure AD B2C.',
      'B. In Azure AD, create a new conditional access policy.',
      'C. Upgrade to Azure AD Premium.',
      'D. In Azure AD, enable application proxy.',
      'E. In Azure AD conditional access, enable the baseline policy.'
    ]
  },
  {
    id: '816379',
    topic: 'Topic 4',
    pregunta: 'DRAG DROP -\nAn organization plans to deploy Azure storage services.\nYou need to configure shared access signature (SAS) for granting access to Azure Storage.\nWhich SAS types should you use? To answer, drag the appropriate SAS types to the correct requirements. Each SAS type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0038900001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0038900002.jpg',
    respuestas: []
  },
  {
    id: '816380',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou are developing an ASP.NET Core app that includes feature flags which are managed by Azure App Configuration. You create an Azure App Configuration store named AppFeatureflagStore as shown in the exhibit:\n\nYou must be able to use the feature in the app by using the following markup:\n\nYou need to update the app to use the feature flag.\nWhich values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0039000001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0039200001.jpg',
    respuestas: []
  },
  {
    id: '816381',
    topic: 'Topic 4',
    pregunta: "HOTSPOT -\nYou have a single page application (SPA) web application that manages information based on data returned by Microsoft Graph from another company's Azure\nActive Directory (Azure AD) instance.\nUsers must be able to authenticate and access Microsoft Graph by using their own company's Azure AD instance.\nYou need to configure the application manifest for the app registration.\nHow should you complete the manifest? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0039400001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0039500001.png',
    respuestas: []
  },
  {
    id: '816382',
    topic: 'Topic 4',
    pregunta: 'You manage a data processing application that receives requests from an Azure Storage queue.\nYou need to manage access to the queue. You have the following requirements:\n✑ Provide other applications access to the Azure queue.\n✑ Ensure that you can revoke access to the queue without having to regenerate the storage account keys.\n✑ Specify access at the queue level and not at the storage account level.\nWhich type of shared access signature (SAS) should you use?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Service SAS with a stored access policy',
      'B. Account SAS',
      'C. User Delegation SAS',
      'D. Service SAS with ad hoc SAS'
    ]
  },
  {
    id: '816383',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou are developing an application to store and retrieve data in Azure Blob storage. The application will be hosted in an on-premises virtual machine (VM). The\nVM is connected to Azure by using a Site-to-Site VPN gateway connection. The application is secured by using Azure Active Directory (Azure AD) credentials.\nThe application must be granted access to the Azure Blob storage account with a start time, expiry time, and read permissions. The Azure Blob storage account access must use the Azure AD credentials of the application to secure data access. Data access must be able to be revoked if the client application security is breached.\nYou need to secure the application access to Azure Blob storage.\nWhich security features should you use? To answer select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0039900001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0040000001.jpg',
    respuestas: []
  },
  {
    id: '816384',
    topic: 'Topic 4',
    pregunta: 'You are building a web application that uses the Microsoft identity platform for user authentication.\nYou are implementing user identification for the web application.\nYou need to retrieve a claim to uniquely identify a user.\nWhich claim type should you use?\n',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. aud',
      'B. nonce',
      'C. oid',
      'D. idp'
    ]
  },
  {
    id: '816385',
    topic: 'Topic 4',
    pregunta: 'You are developing an Azure Function that calls external APIs by providing an access token for the API. The access token is stored in a secret named token in an\nAzure Key Vault named mykeyvault.\nYou need to ensure the Azure Function can access to the token. Which value should you store in the Azure Function App configuration?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. KeyVault:mykeyvault;Secret:token',
      'B. App:Settings:Secret:mykeyvault:token',
      'C. AZUREKVCONNSTR_ https://mykeyveult.vault.ezure.net/secrets/token/',
      'D. @Microsoft.KeyVault(SecretUri=https://mykeyvault.vault.azure.net/secrets/token/)'
    ]
  },
  {
    id: '816386',
    topic: 'Topic 4',
    pregunta: 'A company maintains multiple web and mobile applications. Each application uses custom in-house identity providers as well as social identity providers.\nYou need to implement single sign-on (SSO) for all the applications.\nWhat should you do?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Use Azure Active Directory B2C (Azure AD B2C) with custom policies.',
      'B. Use Azure Active Directory B2B (Azure AD B2B) and enable external collaboration.',
      'C. Use Azure Active Directory B2C (Azure AD B2C) with user flows.',
      'D. Use Azure Active Directory B2B (Azure AD B2B).'
    ]
  },
  {
    id: '816387',
    topic: 'Topic 4',
    pregunta: 'You develop a Python application for image rendering that uses GPU resources to optimize rendering processes. You deploy the application to an Azure\nContainer Instances (ACI) Linux container.\nThe application requires a secret value to be passed when the container is started. The value must only be accessed from within the container.\nYou need to pass the secret value.\nWhat are two possible ways to achieve this goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AE',
    respuestas: [
      'A. Create an environment variable Set the secureValue property to the secret value.',
      'B. Add the secret value to the container image. Use a managed identity.',
      'C. Add the secret value to the application code Set the container startup command.',
      'D. Add the secret value to an Azure Blob storage account. Generate a SAS token.',
      'E. Mount a secret volume containing the secret value in a secrets file.'
    ]
  },
  {
    id: '816388',
    topic: 'Topic 4',
    pregunta: 'You are developing a user portal for a company.\nYou need to create a report for the portal that lists information about employees who are subject matter experts for a specific topic. You must ensure that administrators have full control and consent over the data.\nWhich technology should you use?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Microsoft Graph data connect',
      'B. Microsoft Graph API',
      'C. Microsoft Graph connectors'
    ]
  },
  {
    id: '816389',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou are a developer building a web site using a web app. The web site stores configuration data in Azure App Configuration.\nAccess to Azure App Configuration has been configured to use the identity of the web app for authentication. Security requirements specify that no other authentication systems must be used.\nYou need to load configuration data from Azure App Configuration.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0040600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0040700001.png',
    respuestas: []
  },
  {
    id: '816390',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT -\nYou are building an application that stores sensitive customer data in Azure Blob storage. The data must be encrypted with a key that is unique for each customer.\nIf the encryption key has been corrupted it must not be used for encryption.\nYou need to ensure that the blob is encrypted.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0041000001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0041100001.png',
    respuestas: []
  },
  {
    id: '860788',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT\n-\n\nYou are developing a web application that uses the Microsoft Identity platform for user and resource authentication. The web application called several REST APIs.\n\nYou are implementing various authentication and authorization flows for the web application.\n\nYou need to validate the claims in the authentication token.\n\nWhich token type should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image395.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image396.png',
    respuestas: []
  },
  {
    id: '860789',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT\n-\n\nYou are developing a content management application for technical manuals. The application is deployed as an Azure Static Web app.\n\nAuthenticated users can view pages under/manuals but only contributors can access the page /manuals/new.html.\n\nYou need to configure the routing for the web app.\n\nHow should you complete the configuration? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image397.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image398.png',
    respuestas: []
  },
  {
    id: '860790',
    topic: 'Topic 4',
    pregunta: 'You are developing a web application that uses the Microsoft identity platform for user and resource authentication. The web application calls several REST APIs.\n\nA REST API call must read the user’s calendar. The web application requires permission to send an email as the user.\n\nYou need to authorize the web application and the API.\n\nWhich parameter should you use?',
    respuestaCorrecta: 'E',
    respuestas: [
      'A. tenant',
      'B. code_challenge',
      'C. state',
      'D. client_id',
      'E. scope'
    ]
  },
  {
    id: '860791',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT\n-\n\nYou develop and deploy a web app to Azure App service. The web app allows users to authenticate by using social identity providers through the Azure B2C service. All user profile information is stored in Azure B2C.\n\nYou must update the web app to display common user properties from Azure B2C to include the following information:\n\n• Email address\n• Job title\n• First name\n• Last name\n• Office location\n\nYou need to implement the user properties in the web app.\n\nWhich code library and API should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image399.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image400.png',
    respuestas: []
  },
  {
    id: '860792',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT\n-\n\nYou develop and deploy the following staticwebapp.config.json file to the app_location value specified in the workflow file of an Azure Static Web app:\n\n\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image401.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image403.png',
    respuestas: []
  },
  {
    id: '860793',
    topic: 'Topic 4',
    pregunta: 'You develop and deploy an Azure App Service web app named App1. You create a new Azure Key Vault named Vault1. You import several API keys, passwords, certificates, and cryptographic keys into Vault1.\n\nYou need to grant App1 access to Vault1 and automatically rotate credentials. Credentials must not be stored in code.\n\nWhat should you do?',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Enable App Service authentication for Appl. Assign a custom RBAC role to Vault1.',
      'B. Add a TLS/SSL binding to App1.',
      'C. Upload a self-signed client certificate to Vault1. Update App1 to use the client certificate.',
      'D. Assign a managed identity to App1.'
    ]
  },
  {
    id: '860794',
    topic: 'Topic 4',
    pregunta: 'You are developing a Java application to be deployed in Azure. The application stores sensitive data in Azure Cosmos DB.\n\nYou need to configure Always Encrypted to encrypt the sensitive data inside the application.\n\nWhat should you do first?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Create a new container to include an encryption policy with the JSON properties to be encrypted.',
      'B. Create a customer-managed key (CMK) and store the key in a new Azure Key Vault instance.',
      'C. Create a data encryption key (DEK) by using the Azure Cosmos DB SDK and store the key in Azure Cosmos DB.',
      'D. Create an Azure AD managed identity and assign the identity to a new Azure Key Vault instance.'
    ]
  },
  {
    id: '860795',
    topic: 'Topic 4',
    pregunta: "HOTSPOT\n-\n\nYou develop a web app that interacts with Azure Active Directory (Azure AD) groups by using Microsoft Graph.\n\nYou build a web page that shows all Azure AD groups that are not of the type 'Unified'.\n\nYou need to build the Microsoft Graph query for the page.\n\nHow should you complete the query? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n",
    imgPregunta: 'https://img.examtopics.com/az-204/image404.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image405.png',
    respuestas: []
  },
  {
    id: '860796',
    topic: 'Topic 4',
    pregunta: 'DRAG DROP\n-\n\nYou are developing an Azure solution.\n\nYou need to develop code to access a secret stored in Azure Key Vault.\n\nHow should you complete the code segment? To answer, drag the appropriate code segments to the correct location. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image406.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image407.png',
    respuestas: []
  },
  {
    id: '860797',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT\n-\n\nYou are a developer building a web site using a web app. The web site stores configuration data in Azure App Configuration.\n\nAccess to Azure App Configuration has been configured to use the identity of the web app for authentication. Security requirements specify that no other authentication systems must be used.\n\nYou need to load configuration data from Azure App Configuration.\n\nHow should you complete the code? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image408.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image409.png',
    respuestas: []
  },
  {
    id: '882063',
    topic: 'Topic 4',
    pregunta: 'You are developing several microservices to deploy to a new Azure Kubernetes Service cluster. The microservices manage data stored in Azure Cosmos DB and Azure Blob storage. The data is secured by using customer-managed keys stored in Azure Key Vault.\n\nYou must automate key rotation for all Azure Key Vault keys and allow for manual key rotation. Keys must rotate every three months. Notifications of expiring keys must be sent before key expiry.\n\nYou need to configure key rotation and enable key expiry notifications.\n\nWhich two actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'AC',
    respuestas: [
      'A. Create and configure a new Azure Event Grid instance.',
      'B. Configure Azure Key Vault alerts.',
      'C. Create and assign an Azure Key Vault access policy.',
      'D. Create and configure a key rotation policy during key creation.'
    ]
  },
  {
    id: '890555',
    topic: 'Topic 4',
    pregunta: 'You are developing a web application that uses the Microsoft identity platform to authenticate users and resources. The web application calls several REST APIs.\n\nThe APIs require an access token from the Microsoft identity platform.\n\nYou need to request a token.\n\nWhich three properties should you use? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'ABD',
    respuestas: [
      'A. Redirect URI/URL',
      'B. Application ID',
      'C. Application name',
      'D. Application secret',
      'E. Supported account type'
    ]
  },
  {
    id: '890556',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an application that uses Azure Storage to store customer data. The data must only be decrypted by the customer and the customer must be provided a script to rotate keys.\n\nYou need to provide a script to rotate keys to the customer.\n\nHow should you complete the command? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image453.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image454.png',
    respuestas: []
  },
  {
    id: '892688',
    topic: 'Topic 4',
    pregunta: 'You are developing several Azure API Management (APIM) hosted APIs.\n\nYou must transform the APIs to hide private backend information and obscure the technology stack used to implement the backend processing.\n\nYou need to protect all APIs.\n\nWhat should you do?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Configure and apply a new inbound policy scoped to a product.',
      'B. Configure and apply a new outbound policy scoped to the operation.',
      'C. Configure and apply a new outbound policy scoped to global.',
      'D. Configure and apply a new backend policy scoped to global.'
    ]
  },
  {
    id: '900746',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an Azure Function App named App1. You also plan to use cross-origin requests (CORS).\n\nYou have the following requirements:\n\n• App1 functions must securely access an Azure Blob Storage account.\n• Access to the Azure Blob Storage account must not require the provisioning or rotation of secrets.\n• JavaScript code running in a browser on an external host must not be allowed to interact with the function.\n\nYou need to implement App1.\n\nWhich configuration should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image486.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image487.png',
    respuestas: []
  },
  {
    id: '907850',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT\n-\n\nYou develop a containerized application. The application must be deployed to an existing Azure Kubernetes Service (AKS) cluster from an Azure Container Registry (ACR) instance. You use the Azure command-line interface (Azure CLI) to deploy the application image to AKS.\n\nImages must be pulled from the registry. You must be able to view all registries within the current Azure subscription. Authentication must be managed by Microsoft Entra ID and removed when the registry is deleted. The solution must use the principle of least privilege.\n\nYou need to configure authentication to the registry.\n\nWhich authentication configuration should you use? To answer, select the appropriate configuration values in the answer area,\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image509.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image510.png',
    respuestas: []
  },
  {
    id: '907851',
    topic: 'Topic 4',
    pregunta: 'Case study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground -\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment -\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website -\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms -\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors -\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements -\n\nThe application components must meet the following requirements:\n\n\nCorporate website -\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms -\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors -\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff -\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity -\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues -\n\n\nCorporate website -\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors -\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to implement farmer authentication.\n\nWhich three actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'CDE',
    respuestas: [
      'A. Add the shared access signature (SAS) token to the app.',
      'B. Create a shared access signature (SAS) token.',
      'C. Create a user flow.',
      'D. Add the app to the user flow.',
      'E. Register the app in Microsoft Entra ID.'
    ]
  },
  {
    id: '907852',
    topic: 'Topic 4',
    pregunta: 'Case study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground -\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment -\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website -\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms -\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors -\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements -\n\nThe application components must meet the following requirements:\n\n\nCorporate website -\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms -\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors -\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff -\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity -\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues -\n\n\nCorporate website -\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors -\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to secure the corporate website to meet the security requirements.\n\nWhat should you do?',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Create an Azure Cache for Redis instance. Update the code to support the cache.',
      'B. Create an Azure Content Delivery Network profile and endpoint. Configure the endpoint.',
      'С. Create an App Service instance with a standard plan. Configure the custom domain with a TLS/SSL certificate.',
      'D. Create an Azure Application Gateway with a Web Application Firewall (WAF). Configure end-to-end TLS encryption and the WAF.'
    ]
  },
  {
    id: '907853',
    topic: 'Topic 4',
    pregunta: 'HOTSPOT\n-\n\n\nCase study\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground\n-\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment\n-\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website\n-\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms\n-\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors\n-\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements\n-\n\nThe application components must meet the following requirements:\n\n\nCorporate website\n-\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms\n-\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors\n-\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff\n-\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity\n-\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues\n-\n\n\nCorporate website\n-\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors\n-\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to display the profile photo and email for signed-in internal staff on the website.\n\nWhich Microsoft Graph configuration should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image511.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image512.png',
    respuestas: []
  },
  {
    id: '907854',
    topic: 'Topic 4',
    pregunta: 'Case study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground -\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment -\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website -\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms -\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors -\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements -\n\nThe application components must meet the following requirements:\n\n\nCorporate website -\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms -\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors -\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff -\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity -\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues -\n\n\nCorporate website -\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors -\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to configure all site configuration settings for the corporate website.\n\nWhich three actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'ABE',
    respuestas: [
      'A. Create a managed identity.',
      'B. Update the role assignments for the Azure Key Vault.',
      'C. Create an Azure App Configuration store.',
      'D. Update the role assignments for the Azure App Configuration store.',
      'E. Create an Azure Key Vault.'
    ]
  },
  {
    id: '907855',
    topic: 'Topic 4',
    pregunta: 'You are developing an application that uses keys stored in Azure Key Vault.\n\nYou need to enforce a specific cryptographic algorithm and key size for keys stored in the vault.\n\nWhat should you use?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Secret versioning',
      'B. Azure Policy',
      'C. Key Vault Firewall',
      'D. Access policies'
    ]
  },
  {
    id: '816391',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP -\nYou develop a web app that uses the tier D1 app service plan by using the Web Apps feature of Microsoft Azure App Service.\nSpikes in traffic have caused increases in page load times.\nYou need to ensure that the web app automatically scales when CPU load is about 85 percent and minimize costs.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nNOTE: More than one order of answer choices is correct. You will receive credit for any of the correct orders you select.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0045400001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0045500001.jpg',
    respuestas: []
  },
  {
    id: '816392',
    topic: 'Topic 5',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution. Determine whether the solution meets the stated goals.\nYou are developing and deploying several ASP.NET web applications to Azure App Service. You plan to save session state information and HTML output.\nYou must use a storage mechanism with the following requirements:\n✑ Share session state across all ASP.NET web applications.\n✑ Support controlled, concurrent access to the same session state data for multiple readers and a single writer.\n✑ Save full HTTP responses for concurrent requests.\nYou need to store the information.\nProposed Solution: Enable Application Request Routing (ARR).\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816393',
    topic: 'Topic 5',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution. Determine whether the solution meets the stated goals.\nYou are developing and deploying several ASP.NET web applications to Azure App Service. You plan to save session state information and HTML output.\nYou must use a storage mechanism with the following requirements:\n✑ Share session state across all ASP.NET web applications.\n✑ Support controlled, concurrent access to the same session state data for multiple readers and a single writer.\n✑ Save full HTTP responses for concurrent requests.\nYou need to store the information.\nProposed Solution: Deploy and configure an Azure Database for PostgreSQL. Update the web applications.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816394',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT -\nA company is developing a gaming platform. Users can join teams to play online and see leaderboards that include player statistics. The solution includes an entity named Team.\nYou plan to implement an Azure Redis Cache instance to improve the efficiency of data operations for entities that rarely change.\nYou need to invalidate the cache when team data is changed.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0045800001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0045900001.jpg',
    respuestas: []
  },
  {
    id: '816395',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP -\nA company has multiple warehouses. Each warehouse contains IoT temperature devices which deliver temperature data to an Azure Service Bus queue.\nYou need to send email alerts to facility supervisors immediately if the temperature at a warehouse goes above or below specified threshold temperatures.\nWhich five actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0046000001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0046100001.png',
    respuestas: []
  },
  {
    id: '816396',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP -\nYou develop an ASP.NET Core MVC application. You configure the application to track webpages and custom events.\nYou need to identify trends in application usage.\nWhich Azure Application Insights Usage Analysis features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0046200001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0046200002.png',
    respuestas: []
  },
  {
    id: '816397',
    topic: 'Topic 5',
    pregunta: 'You develop a gateway solution for a public facing news API. The news API back end is implemented as a RESTful service and uses an OpenAPI specification.\nYou need to ensure that you can access the news API by using an Azure API Management service instance.\nWhich Azure PowerShell command should you run?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Import-AzureRmApiManagementApi -Context $ApiMgmtContext -SpecificationFormat "Swagger" -SpecificationPath $SwaggerPath -Path $Path',
      'B. New-AzureRmApiManagementBackend -Context $ApiMgmtContext -Url $Url -Protocol http',
      'C. New-AzureRmApiManagement -ResourceGroupName $ResourceGroup -Name $Name ג€"Location $Location -Organization $Org -AdminEmail $AdminEmail',
      'D. New-AzureRmApiManagementBackendProxy -Url $ApiUrl'
    ]
  },
  {
    id: '816398',
    topic: 'Topic 5',
    pregunta: 'You are creating a hazard notification system that has a single signaling server which triggers audio and visual alarms to start and stop.\nYou implement Azure Service Bus to publish alarms. Each alarm controller uses Azure Service Bus to receive alarm signals as part of a transaction. Alarm events must be recorded for audit purposes. Each transaction record must include information about the alarm type that was activated.\nYou need to implement a reply trail auditing solution.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AD',
    respuestas: [
      'A. Assign the value of the hazard message SessionID property to the ReplyToSessionId property.',
      'B. Assign the value of the hazard message MessageId property to the DevileryCount property.',
      'C. Assign the value of the hazard message SessionID property to the SequenceNumber property.',
      'D. Assign the value of the hazard message MessageId property to the CorrelationId property.',
      'E. Assign the value of the hazard message SequenceNumber property to the DeliveryCount property.',
      'F. Assign the value of the hazard message MessageId property to the SequenceNumber property.'
    ]
  },
  {
    id: '816399',
    topic: 'Topic 5',
    pregunta: 'You are developing an Azure function that connects to an Azure SQL Database instance. The function is triggered by an Azure Storage queue.\nYou receive reports of numerous System.InvalidOperationExceptions with the following message:\n`Timeout expired. The timeout period elapsed prior to obtaining a connection from the pool. This may have occurred because all pooled connections were in use and max pool size was reached.`\nYou need to prevent the exception.\nWhat should you do?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. In the host.json file, decrease the value of the batchSize option',
      'B. Convert the trigger to Azure Event Hub',
      'C. Convert the Azure Function to the Premium plan',
      'D. In the function.json file, change the value of the type option to queueScaling'
    ]
  },
  {
    id: '816400',
    topic: 'Topic 5',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution. Determine whether the solution meets the stated goals.\nYou are developing and deploying several ASP.NET web applications to Azure App Service. You plan to save session state information and HTML output.\nYou must use a storage mechanism with the following requirements:\n✑ Share session state across all ASP.NET web applications.\n✑ Support controlled, concurrent access to the same session state data for multiple readers and a single writer.\n✑ Save full HTTP responses for concurrent requests.\nYou need to store the information.\nProposed Solution: Deploy and configure Azure Cache for Redis. Update the web applications.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816401',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT -\nYou are debugging an application that is running on Azure Kubernetes cluster named cluster1. The cluster uses Azure Monitor for containers to monitor the cluster.\nThe application has sticky sessions enabled on the ingress controller.\nSome customers report a large number of errors in the application over the last 24 hours.\nYou need to determine on which virtual machines (VMs) the errors are occurring.\nHow should you complete the Azure Monitor query? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0046900001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0047100001.png',
    respuestas: []
  },
  {
    id: '816402',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT -\nYou plan to deploy a web app to App Service on Linux. You create an App Service plan. You create and push a custom Docker image that contains the web app to Azure Container Registry.\nYou need to access the console logs generated from inside the container in real-time.\nHow should you complete the Azure CLI command? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0047300001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0047300002.png',
    respuestas: []
  },
  {
    id: '816403',
    topic: 'Topic 5',
    pregunta: 'You develop and deploy an ASP.NET web app to Azure App Service. You use Application Insights telemetry to monitor the app.\nYou must test the app to ensure that the app is available and responsive from various points around the world and at regular intervals. If the app is not responding, you must send an alert to support staff.\nYou need to configure a test for the web app.\nWhich two test types can you use? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'BC',
    respuestas: [
      'A. integration',
      'B. multi-step web',
      'C. URL ping',
      'D. unit',
      'E. load'
    ]
  },
  {
    id: '816404',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP -\nA web service provides customer summary information for e-commerce partners. The web service is implemented as an Azure Function app with an HTTP trigger.\nAccess to the API is provided by an Azure API Management instance. The API Management instance is configured in consumption plan mode. All API calls are authenticated by using OAuth.\nAPI calls must be cached. Customers must not be able to view cached data for other customers.\nYou need to configure API Management policies for caching.\nHow should you complete the policy statement?\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0047600001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0047600002.jpg',
    respuestas: []
  },
  {
    id: '816405',
    topic: 'Topic 5',
    pregunta: 'You are developing applications for a company. You plan to host the applications on Azure App Services.\nThe company has the following requirements:\n✑ Every five minutes verify that the websites are responsive.\n✑ Verify that the websites respond within a specified time threshold. Dependent requests such as images and JavaScript files must load properly.\n✑ Generate alerts if a website is experiencing issues.\n✑ If a website fails to load, the system must attempt to reload the site three more times.\nYou need to implement this process with the least amount of effort.\nWhat should you do?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Create a Selenium web test and configure it to run from your workstation as a scheduled task.',
      'B. Set up a URL ping test to query the home page.',
      'C. Create an Azure function to query the home page.',
      'D. Create a multi-step web test to query the home page.',
      'E. Create a Custom Track Availability Test to query the home page.'
    ]
  },
  {
    id: '816406',
    topic: 'Topic 5',
    pregunta: 'You develop and add several functions to an Azure Function app that uses the latest runtime host. The functions contain several REST API endpoints secured by using SSL. The Azure Function app runs in a Consumption plan.\nYou must send an alert when any of the function endpoints are unavailable or responding too slowly.\nYou need to monitor the availability and responsiveness of the functions.\nWhat should you do?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Create a URL ping test.',
      'B. Create a timer triggered function that calls TrackAvailability() and send the results to Application Insights.',
      'C. Create a timer triggered function that calls GetMetric("Request Size") and send the results to Application Insights.',
      'D. Add a new diagnostic setting to the Azure Function app. Enable the FunctionAppLogs and Send to Log Analytics options.'
    ]
  },
  {
    id: '816407',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP -\nYou are developing an application to retrieve user profile information. The application will use the Microsoft Graph SDK.\nThe app must retrieve user profile information by using a Microsoft Graph API call.\nYou need to call the Microsoft Graph API from the application.\nIn which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0047900001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0048000001.jpg',
    respuestas: []
  },
  {
    id: '816408',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP -\nYou develop and deploy an Azure Logic App that calls an Azure Function app. The Azure Function App includes an OpenAPI (Swagger) definition and uses an\nAzure Blob storage account. All resources are secured by using Azure Active Directory (Azure AD).\nThe Logic App must use Azure Monitor logs to record and store information about runtime data and events. The logs must be stored in the Azure Blob storage account.\nYou need to set up Azure Monitor logs and collect diagnostics data for the Azure Logic App.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0048100001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0048200001.png',
    respuestas: []
  },
  {
    id: '816409',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP -\nYou develop an application. You plan to host the application on a set of virtual machines (VMs) in Azure.\nYou need to configure Azure Monitor to collect logs from the application.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0048300001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0048300002.png',
    respuestas: []
  },
  {
    id: '816410',
    topic: 'Topic 5',
    pregunta: 'You develop and deploy an Azure App Service web app. The app is deployed to multiple regions and uses Azure Traffic Manager. Application Insights is enabled for the app.\nYou need to analyze app uptime for each month.\nWhich two solutions will achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'BD',
    respuestas: [
      'A. Azure Monitor logs',
      'B. Application Insights alerts',
      'C. Azure Monitor metrics',
      'D. Application Insights web tests'
    ]
  },
  {
    id: '816411',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP -\nYou develop and deploy an Azure App Service web app. The web app accesses data in an Azure SQL database.\nYou must update the web app to store frequently used data in a new Azure Cache for Redis Premium instance.\nYou need to implement the Azure Cache for Redis features.\nWhich feature should you implement? To answer, drag the appropriate feature to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0048700001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0048700002.png',
    respuestas: []
  },
  {
    id: '816412',
    topic: 'Topic 5',
    pregunta: 'You are developing an ASP.NET Core Web API web service. The web service uses Azure Application Insights for all telemetry and dependency tracking. The web service reads and writes data to a database other than Microsoft SQL Server.\nYou need to ensure that dependency tracking works for calls to the third-party database.\nWhich two dependency telemetry properties should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'BD',
    respuestas: [
      'A. Telemetry.Context.Cloud.RoleInstance',
      'B. Telemetry.Id',
      'C. Telemetry.Name',
      'D. Telemetry.Context.Operation.Id',
      'E. Telemetry.Context.Session.Id'
    ]
  },
  {
    id: '816413',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT -\nYou are using Azure Front Door Service.\nYou are expecting inbound files to be compressed by using Brotli compression. You discover that inbound XML files are not compressed. The files are 9 megabytes (MB) in size.\nYou need to determine the root cause for the issue.\nTo answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0048900001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0049000001.jpg',
    respuestas: []
  },
  {
    id: '816414',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT -\nYou are developing an Azure App Service hosted ASP.NET Core web app to deliver video-on-demand streaming media. You enable an Azure Content Delivery\nNetwork (CDN) Standard for the web endpoint. Customer videos are downloaded from the web app by using the following example URL: http://www.contoso.com/ content.mp4?quality=1.\nAll media content must expire from the cache after one hour. Customer videos with varying quality must be delivered to the closest regional point of presence\n(POP) node.\nYou need to configure Azure CDN caching rules.\nWhich options should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0049200001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0049300001.jpg',
    respuestas: []
  },
  {
    id: '816415',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT -\nYou are developing an ASP.NET Core time sheet application that runs as an Azure Web App. Users of the application enter their time sheet information on the first day of every month.\nThe application uses a third-party web service to validate data.\nThe application encounters periodic server errors due to errors that result from calling a third-party web server. Each request to the third-party server has the same chance of failure.\nYou need to configure an Azure Monitor alert to detect server errors unrelated to the third-party service. You must minimize false-positive alerts.\nHow should you complete the Azure Resource Manager template? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0049500001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0049600001.jpg',
    respuestas: []
  },
  {
    id: '816416',
    topic: 'Topic 5',
    pregunta: 'You are developing a web application that uses Azure Cache for Redis. You anticipate that the cache will frequently fill and that you will need to evict keys.\nYou must configure Azure Cache for Redis based on the following predicted usage pattern: A small subset of elements will be accessed much more often than the rest.\nYou need to configure the Azure Cache for Redis to optimize performance for the predicted usage pattern.\nWhich two eviction policies will achieve the goal?\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'BC',
    respuestas: [
      'A. noeviction',
      'B. allkeys-lru',
      'C. volatile-lru',
      'D. allkeys-random',
      'E. volatile-ttl',
      'F. volatile-random'
    ]
  },
  {
    id: '816417',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP -\nAn organization has web apps hosted in Azure.\nThe organization wants to track events and telemetry data in the web apps by using Application Insights.\nYou need to configure the web apps for Application Insights.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0049800001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0049800002.jpg',
    respuestas: []
  },
  {
    id: '816418',
    topic: 'Topic 5',
    pregunta: 'An organization hosts web apps in Azure. The organization uses Azure Monitor.\nYou discover that configuration changes were made to some of the web apps.\nYou need to identify the configuration changes.\nWhich Azure Monitor log should you review?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. AppServiceAppLogs',
      'B. AppServiceEnvironmentPlatformlogs',
      'C. AppServiceConsoleLogs',
      'D. AppServiceAuditLogs'
    ]
  },
  {
    id: '816419',
    topic: 'Topic 5',
    pregunta: 'You develop and deploy an Azure App Service web app to a production environment. You enable the Always On setting and the Application Insights site extensions.\nYou deploy a code update and receive multiple failed requests and exceptions in the web app.\nYou need to validate the performance and failure counts of the web app in near real time.\nWhich Application Insights tool should you use?\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0050100001.jpg',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Profiler',
      'B. Smart Detection',
      'C. Live Metrics Stream',
      'D. Application Map',
      'E. Snapshot Debugger'
    ]
  },
  {
    id: '816420',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT -\nYou deploy an ASP.NET web app to Azure App Service.\nYou must monitor the web app by using Application Insights.\nYou need to configure Application Insights to meet the requirements.\nWhich feature should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0050200001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0050300001.png',
    respuestas: []
  },
  {
    id: '816421',
    topic: 'Topic 5',
    pregunta: 'You are building a web application that performs image analysis on user photos and returns metadata containing objects identified. The image analysis is very costly in terms of time and compute resources. You are planning to use Azure Redis Cache so duplicate uploads do not need to be reprocessed.\nIn case of an Azure data center outage, metadata loss must be kept to a minimum.\nYou need to configure the Azure Redis cache instance.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'BD',
    respuestas: [
      'A. Configure Azure Redis with AOF persistence.',
      'B. Configure Azure Redis with RDB persistence.',
      'C. Configure second storage account for persistence.',
      'D. Set backup frequency to the minimum value.'
    ]
  },
  {
    id: '816422',
    topic: 'Topic 5',
    pregunta: 'You are developing an Azure-based web application. The application goes offline periodically to perform offline data processing. While the application is offline, numerous Azure Monitor alerts fire which result in the on-call developer being paged.\nThe application must always log when the application is offline for any reason.\nYou need to ensure that the on-call developer is not paged during offline processing.\nWhat should you do?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Add Azure Monitor alert processing rules to suppress notifications.',
      'B. Disable Azure Monitor Service Health Alerts during offline processing.',
      'C. Create an Azure Monitor Metric Alert.',
      'D. Build an Azure Monitor action group that suppresses the alerts.'
    ]
  },
  {
    id: '860798',
    topic: 'Topic 5',
    pregunta: 'You are developing an online game that includes a feature that allows players to interact with other players on the same team within a certain distance. The calculation to determine the players in range occurs when players move and are cached in an Azure Cache for Redis instance.\n\nThe system should prioritize players based on how recently they have moved and should not prioritize players who have logged out of the game.\n\nYou need to select an eviction policy.\n\nWhich eviction policy should you use?',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. allkeys-Iru',
      'B. volatile-Iru',
      'C. allkeys-lfu',
      'D. volatile-ttl'
    ]
  },
  {
    id: '860799',
    topic: 'Topic 5',
    pregunta: 'You develop an Azure App Service web app and deploy to a production environment. You enable Application Insights for the web app.\n\nThe web app is throwing multiple exceptions in the environment.\n\nYou need to examine the state of the source code and variables when the exceptions are thrown.\n\nWhich Application Insights feature should you configure?',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Smart detection',
      'B. Profiler',
      'C. Snapshot Debugger',
      'D. Standard test'
    ]
  },
  {
    id: '860800',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP\n-\n\nYou develop and deploy a Java application to Azure. The application has been instrumented by using the Application Insights SDK.\n\nThe telemetry data must be enriched and processed before it is sent to the Application Insights service.\n\nYou need to modify the telemetry data.\n\nWhich Application Insights SDK features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image410.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image411.png',
    respuestas: []
  },
  {
    id: '860801',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT\n-\n\nYou develop new functionality in a web application for a company that provides access to seismic data from around the world. The seismic data is stored in Redis Streams within an Azure Cache for Redis instance.\n\nThe new functionality includes a real-time display of seismic events as they occur.\n\nYou need to implement the Azure Cache for Redis command to receive seismic data.\n\nHow should you complete the command? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image412.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image413.png',
    respuestas: []
  },
  {
    id: '860802',
    topic: 'Topic 5',
    pregunta: 'You develop an ASP.NET Core app that uses Azure App Configuration. You also create an App Configuration containing 100 settings.\n\nThe app must meet the following requirements:\n\n• Ensure the consistency of all configuration data when changes to individual settings occur.\n• Handle configuration data changes dynamically without causing the application to restart.\n• Reduce the overall number of requests made to App Configuration APIs.\n\nYou must implement dynamic configuration updates in the app.\n\nWhat are two ways to achieve this goal? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'AB',
    respuestas: [
      'A. Create and register a sentinel key in the App Configuration store. Set the refreshAll parameter of the Register method to true.',
      'B. Increase the App Configuration cache expiration from the default value.',
      'C. Decrease the App Configuration cache expiration from the default value.',
      'D. Create and configure Azure Key Vault. Implement the Azure Key Vault configuration provider.',
      'E. Register all keys in the App Configuration store. Set the refreshAll parameter of the Register method to false.',
      'F. Create and implement environment variables for each App Configuration store setting.'
    ]
  },
  {
    id: '882064',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT\n-\n\nYou develop and deploy an Azure App Service web app that connects to Azure Cache for Redis as a content cache. All resources have been deployed to the East US 2 region.\n\nThe security team requires the following audit information from Azure Cache for Redis:\n\n• The number of Redis client connections from an associated IP address.\n• Redis operations completed on the content cache.\n• The location (region) in which the Azure Cach3e for Redis instance was accessed.\n\nThe audit information must be captured and analyzed by a security team application deployed to the Central US region.\n\nYou need to log information on all client connections to the cache.\n\nWhich configuration values should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image428.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image429.png',
    respuestas: []
  },
  {
    id: '882065',
    topic: 'Topic 5',
    pregunta: 'You develop and deploy a web app to Azure App Service. The Azure App Service uses a Basic plan in a single region.\n\nUsers report that the web app is responding slow. You must capture the complete call stack to help identify performance issues in the code. Call stack data must be correlated across app instances. You must minimize cost and impact to users on the web app.\n\nYou need to capture the telemetry.\n\nWhich three actions should you perform? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'DEF',
    respuestas: [
      'A. Restart all apps in the App Service plan.',
      'B. Enable Application Insights site extensions.',
      'C. Upgrade the Azure App Service plan to Premium.',
      'D. Enable Profiler.',
      'E. Enable the Always On setting for the app service.',
      'F. Enable Snapshot debugger.',
      'G. Enable remote debugging.'
    ]
  },
  {
    id: '882066',
    topic: 'Topic 5',
    pregunta: 'You are building an application to track cell towers that are available to phones in near real time. A phone will send information to the application by using the Azure Web PubSub service. The data will be processed by using an Azure Functions app. Traffic will be transmitted by using a content delivery network (CDN).\n\nThe Azure function must be protected against misconfigured or unauthorized invocations.\n\nYou need to ensure that the CDN allows for the Azure function protection.\n\nWhich HTTP header should be on the allowed list?',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Authorization',
      'B. WebHook-Request-Callback',
      'C. Resource',
      'D. WebHook-Request-Origin'
    ]
  },
  {
    id: '890557',
    topic: 'Topic 5',
    pregunta: 'You are developing an Azure App Service web app.\n\nThe web app must securely store session information in Azure Redis Cache.\n\nYou need to connect the web app to Azure Redis Cache.\n\nWhich three Azure Redis Cache properties should you use? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'ABE',
    respuestas: [
      'A. Access key',
      'B. SSL port',
      'C. Subscription name',
      'D. Location',
      'E. Host name',
      'F. Subscription id'
    ]
  },
  {
    id: '890558',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT\n-\n\nYou are developing several microservices to run on Azure Container Apps.\n\nYou need to monitor and diagnose the microservices.\n\nWhich features should you use? To answer, select the appropriate feature in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image455.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image456.png',
    respuestas: []
  },
  {
    id: '892276',
    topic: 'Topic 5',
    pregunta: 'Case study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground -\n\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\n\nCurrent environment -\n\n\nCorporate website -\n\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\n\nRetail Store Locations -\n\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\n\nRequirements -\n\nThe application components must meet the following requirements:\n\n\nCorporate website -\n\n• Secure the website by using SSL.\n• Minimize costs for data storage and hosting.\n• Implement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\n• Distribute the website content globally for local use.\n• Implement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\n• The website must have 99.95 percent uptime.\n\n\nRetail store locations -\n\n• Azure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\n• Audit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\n\nDelivery services -\n\n• Store service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\n• Store delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\n\nInventory services -\n\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\n\nSecurity -\n\n• All Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\n• Authentication and authorization must use Azure AD and services must use managed identities where possible.\n\n\nIssues -\n\n\nRetail Store Locations -\n\n• You must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\n• Azure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\n\n\nYou need to test the availability of the corporate website.\n\nWhich two test types can you use? Each correct answer presents a complete solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'AC',
    respuestas: [
      'A. Standard',
      'B. URL ping',
      'C. Custom testing using the TrackAvailability API method',
      'D. Multi-step'
    ]
  },
  {
    id: '892689',
    topic: 'Topic 5',
    pregunta: 'You have an Azure API Management (APIM) Standard tier instance named APIM1 that uses a managed gateway.\n\nYou plan to use APIM1 to publish an API named API1 that uses a backend database that supports only a limited volume of requests per minute. You also need a policy for API1 that will minimize the possibility that the number of requests to the backend database from an individual IP address you specify exceeds the supported limit.\n\nYou need to identify a policy for API1 that will meet the requirements.\n\nWhich policy should you use?',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. ip-filter',
      'B. quota-by-key',
      'C. rate-limit-by-key',
      'D. rate-limit'
    ]
  },
  {
    id: '900747',
    topic: 'Topic 5',
    pregunta: 'You develop a web application that sells access to last-minute openings for child camps that run on the weekends. The application uses Azure Application Insights for all alerting and monitoring.\n\nThe application must alert operators when a technical issue is preventing sales to camps.\n\nYou need to build an alert to detect technical issues.\n\nWhich alert type should you use?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Metric alert using multiple time series',
      'B. Metric alert using dynamic thresholds',
      'C. Log alert using multiple time series',
      'D. Log alert using dynamic thresholds'
    ]
  },
  {
    id: '907856',
    topic: 'Topic 5',
    pregunta: 'Case study -\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground -\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment -\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website -\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms -\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors -\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements -\n\nThe application components must meet the following requirements:\n\n\nCorporate website -\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms -\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors -\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff -\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity -\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues -\n\n\nCorporate website -\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors -\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to implement an aggregate of telemetry values for distributor API calls.\n\nWhich Application Insights API method should you use?',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. TrackEvent',
      'B. TrackDependency',
      'C. TrackMetric',
      'D. TrackException',
      'E. TrackTrace'
    ]
  },
  {
    id: '907857',
    topic: 'Topic 5',
    pregunta: 'DRAG DROP\n-\n\n\nCase study\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground\n-\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment\n-\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website\n-\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms\n-\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors\n-\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements\n-\n\nThe application components must meet the following requirements:\n\n\nCorporate website\n-\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms\n-\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors\n-\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff\n-\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity\n-\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues\n-\n\n\nCorporate website\n-\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors\n-\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to correct the internal staff issue with webpages.\n\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image513.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image514.png',
    respuestas: []
  },
  {
    id: '907858',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT\n-\n\n\nCase study\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground\n-\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment\n-\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website\n-\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms\n-\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors\n-\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements\n-\n\nThe application components must meet the following requirements:\n\n\nCorporate website\n-\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms\n-\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors\n-\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff\n-\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity\n-\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues\n-\n\n\nCorporate website\n-\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors\n-\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to correct the errors for farmers and distributors.\n\nWhich solution should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image515.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image516.png',
    respuestas: []
  },
  {
    id: '907859',
    topic: 'Topic 5',
    pregunta: 'HOTSPOT\n-\n\n\nCase study\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground\n-\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment\n-\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website\n-\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms\n-\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors\n-\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements\n-\n\nThe application components must meet the following requirements:\n\n\nCorporate website\n-\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms\n-\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors\n-\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff\n-\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity\n-\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues\n-\n\n\nCorporate website\n-\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors\n-\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to resolve the authentication errors for developers.\n\nWhich Service Bus security configuration should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image517.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image518.png',
    respuestas: []
  },
  {
    id: '816423',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce 2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Service Bus. Configure a topic to receive the device data by using a correlation filter.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816424',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce 2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Event Grid. Configure event filtering to evaluate the device identifier.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816425',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP -\nYou manage several existing Logic Apps.\nYou need to change definitions, add new logic, and optimize these apps on a regular basis.\nWhat should you use? To answer, drag the appropriate tools to the correct functionalities. Each tool may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0054900001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0054900002.jpg',
    respuestas: []
  },
  {
    id: '816426',
    topic: 'Topic 6',
    pregunta: 'A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.\nYou need to complete the configuration.\nWhich Azure CLI or PowerShell command should you run?\nA.\n\nB.\n\nC.\n\nD.\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0055000001.png',
    respuestaCorrecta: 'A',
    respuestas: []
  },
  {
    id: '816427',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT -\nYou are developing an application that uses Azure Storage Queues.\nYou have the following code:\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0055200001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0055300001.jpg',
    respuestas: []
  },
  {
    id: '816428',
    topic: 'Topic 6',
    pregunta: 'A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.\nYou need to complete the configuration.\nWhich Azure CLI or PowerShell command should you run?\nA.\n\nB.\n\nC.\n\nD.\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0055400001.png',
    respuestaCorrecta: 'C',
    respuestas: []
  },
  {
    id: '816429',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may not be sent to the service consistently.\nYou have the following requirements:\n✑ Queue size must not grow larger than 80 gigabytes (GB).\n✑ Use first-in-first-out (FIFO) ordering of messages.\n✑ Minimize Azure costs.\nYou need to implement the messaging solution.\nSolution: Use the .Net API to add a message to an Azure Storage Queue from the mobile application. Create an Azure Function App that uses an Azure Storage\nQueue trigger.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816430',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP -\nYou develop software solutions for a mobile delivery service. You are developing a mobile app that users can use to order from a restaurant in their area. The app uses the following workflow:\n1. A driver selects the restaurants for which they will deliver orders.\n2. Orders are sent to all available drivers in an area.\n3. Only orders for the selected restaurants will appear for the driver.\n4. The first driver to accept an order removes it from the list of available orders.\nYou need to implement an Azure Service Bus solution.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0055600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0055700001.png',
    respuestas: []
  },
  {
    id: '816431',
    topic: 'Topic 6',
    pregunta: "HOTSPOT -\nYou develop a news and blog content app for Windows devices.\nA notification must arrive on a user's device when there is a new article available for them to view.\nYou need to implement push notifications.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0055900001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0056000001.png',
    respuestas: []
  },
  {
    id: '816432',
    topic: 'Topic 6',
    pregunta: 'You are developing an Azure messaging solution.\nYou need to ensure that the solution meets the following requirements:\n✑ Provide transactional support.\n✑ Provide duplicate detection.\n✑ Store the messages for an unlimited period of time.\nWhich two technologies will meet the requirements? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AB',
    respuestas: [
      'A. Azure Service Bus Topic',
      'B. Azure Service Bus Queue',
      'C. Azure Storage Queue',
      'D. Azure Event Hub'
    ]
  },
  {
    id: '816433',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP -\nYou develop a gateway solution for a public facing news API.\nThe news API back end is implemented as a RESTful service and hosted in an Azure App Service instance.\nYou need to configure back-end authentication for the API Management service instance.\nWhich target and gateway credential type should you use? To answer, drag the appropriate values to the correct parameters. Each value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0056200001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0056300001.jpg',
    respuestas: []
  },
  {
    id: '816434',
    topic: 'Topic 6',
    pregunta: "HOTSPOT -\nYou are creating an app that uses Event Grid to connect with other services. Your app's event data will be sent to a serverless function that checks compliance.\nThis function is maintained by your company.\nYou write a new event subscription at the scope of your resource. The event must be invalidated after a specific period of time.\nYou need to configure Event Grid.\nWhat should you do? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0056400001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0056500001.jpg',
    respuestas: []
  },
  {
    id: '816435',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT -\nYou are working for Contoso, Ltd.\nYou define an API Policy object by using the following XML markup:\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0056600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0056700001.png',
    respuestas: []
  },
  {
    id: '816436',
    topic: 'Topic 6',
    pregunta: 'You are developing a solution that will use Azure messaging services.\nYou need to ensure that the solution uses a publish-subscribe model and eliminates the need for constant polling.\nWhat are two possible ways to achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AC',
    respuestas: [
      'A. Service Bus',
      'B. Event Hub',
      'C. Event Grid',
      'D. Queue'
    ]
  },
  {
    id: '816437',
    topic: 'Topic 6',
    pregunta: 'A company is implementing a publish-subscribe (Pub/Sub) messaging component by using Azure Service Bus. You are developing the first subscription application.\nIn the Azure portal you see that messages are being sent to the subscription for each topic. You create and initialize a subscription client object by supplying the correct details, but the subscription application is still not consuming the messages.\nYou need to ensure that the subscription client processes all messages.\nWhich code segment should you use?\n',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. await subscriptionClient.AddRuleAsync(new RuleDescription(RuleDescription.DefaultRuleName, new TrueFilter()));',
      'B. subscriptionClient = new SubscriptionClient(ServiceBusConnectionString, TopicName, SubscriptionName);',
      'C. await subscriptionClient.CloseAsync();',
      'D. subscriptionClient.RegisterMessageHandler(ProcessMessagesAsync, messageHandlerOptions);'
    ]
  },
  {
    id: '816438',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may not be sent to the service consistently.\nYou have the following requirements:\n✑ Queue size must not grow larger than 80 gigabytes (GB).\n✑ Use first-in-first-out (FIFO) ordering of messages.\n✑ Minimize Azure costs.\nYou need to implement the messaging solution.\nSolution: Use the .Net API to add a message to an Azure Storage Queue from the mobile application. Create an Azure VM that is triggered from Azure Storage\nQueue events.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816439',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may not be sent to the service consistently.\nYou have the following requirements:\n✑ Queue size must not grow larger than 80 gigabytes (GB).\n✑ Use first-in-first-out (FIFO) ordering of messages.\n✑ Minimize Azure costs.\nYou need to implement the messaging solution.\nSolution: Use the .Net API to add a message to an Azure Service Bus Queue from the mobile application. Create an Azure Windows VM that is triggered from\nAzure Service Bus Queue.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816440',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP -\nYou are developing a REST web service. Customers will access the service by using an Azure API Management instance.\nThe web service does not correctly handle conflicts. Instead of returning an HTTP status code of 409, the service returns a status code of 500. The body of the status message contains only the word conflict.\nYou need to ensure that conflicts produce the correct response.\nHow should you complete the policy? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0057100001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0057200001.png',
    respuestas: []
  },
  {
    id: '816441',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP -\nYou are a developer for a Software as a Service (SaaS) company. You develop solutions that provide the ability to send notifications by using Azure Notification\nHubs.\nYou need to create sample code that customers can use as a reference for how to send raw notifications to Windows Push Notification Services (WNS) devices.\nThe sample code must not use external packages.\nHow should you complete the code segment? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0057300001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0057400001.jpg',
    respuestas: []
  },
  {
    id: '816442',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce\n2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Event Hub. Configure the machine identifier as the partition key and enable capture.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816443',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP -\nYou are developing an Azure solution to collect inventory data from thousands of stores located around the world. Each store location will send the inventory data hourly to an Azure Blob storage account for processing.\nThe solution must meet the following requirements:\n✑ Begin processing when data is saved to Azure Blob storage.\n✑ Filter data based on store location information.\n✑ Trigger an Azure Logic App to process the data for output to Azure Cosmos DB.\n✑ Enable high availability and geographic distribution.\n✑ Allow 24-hours for retries.\n✑ Implement an exponential back off data processing.\nYou need to configure the solution.\nWhat should you implement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0057600007.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0057700001.png',
    respuestas: []
  },
  {
    id: '816444',
    topic: 'Topic 6',
    pregunta: 'You are creating an app that will use CosmosDB for data storage. The app will process batches of relational data.\nYou need to select an API for the app.\nWhich API should you use?\n',
    respuestaCorrecta: 'Incorrect Answer:',
    respuestas: [
      'A. MongoDB API',
      'B. Table API',
      'C. SQL API',
      'D. Cassandra API'
    ]
  },
  {
    id: '816445',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT -\nYou are developing a .NET application that communicates with Azure Storage.\nA message must be stored when the application initializes.\nYou need to implement the message.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0058000001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0058100001.png',
    respuestas: []
  },
  {
    id: '816446',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT -\nA software as a service (SaaS) company provides document management services. The company has a service that consists of several Azure web apps. All\nAzure web apps run in an Azure App Service Plan named PrimaryASP.\nYou are developing a new web service by using a web app named ExcelParser. The web app contains a third-party library for processing Microsoft Excel files.\nThe license for the third-party library stipulates that you can only run a single instance of the library.\nYou need to configure the service.\nHow should you complete the script? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0058300001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0058400001.png',
    respuestas: []
  },
  {
    id: '816447',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP -\nYou have an application that provides weather forecasting data to external partners. You use Azure API Management to publish APIs.\nYou must change the behavior of the API to meet the following requirements:\n✑ Support alternative input parameters\n✑ Remove formatting text from responses\n✑ Provide additional context to back-end services\nWhich types of policies should you implement? To answer, drag the policy types to the correct requirements. Each policy type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0058500004.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0058600001.jpg',
    respuestas: []
  },
  {
    id: '816448',
    topic: 'Topic 6',
    pregunta: 'You are developing an e-commerce solution that uses a microservice architecture.\nYou need to design a communication backplane for communicating transactional messages between various parts of the solution. Messages must be communicated in first-in-first-out (FIFO) order.\nWhat should you use?\n',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Azure Storage Queue',
      'B. Azure Event Hub',
      'C. Azure Service Bus',
      'D. Azure Event Grid'
    ]
  },
  {
    id: '816449',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP -\nA company backs up all manufacturing data to Azure Blob Storage. Admins move blobs from hot storage to archive tier storage every month.\nYou must automatically move blobs to Archive tier after they have not been modified within 180 days. The path for any item that is not archived must be placed in an existing queue. This operation must be performed automatically once a month. You set the value of TierAgeInDays to -180.\nHow should you configure the Logic App? To answer, drag the appropriate triggers or action blocks to the correct trigger or action slots. Each trigger or action block may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0058800001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0058900001.jpg',
    respuestas: []
  },
  {
    id: '816450',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure Service application that processes queue data when it receives a message from a mobile application. Messages may not be sent to the service consistently.\nYou have the following requirements:\n✑ Queue size must not grow larger than 80 gigabytes (GB).\n✑ Use first-in-first-out (FIFO) ordering of messages.\n✑ Minimize Azure costs.\nYou need to implement the messaging solution.\nSolution: Use the .Net API to add a message to an Azure Service Bus Queue from the mobile application. Create an Azure Function App that uses an Azure\nService Bus Queue trigger.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816451',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\nYou are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce 2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.\nYou must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.\nYou need to implement a solution to receive the device data.\nSolution: Provision an Azure Notification Hub. Register all devices with the hub.\nDoes the solution meet the goal?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816452',
    topic: 'Topic 6',
    pregunta: 'You are building a loyalty program for a major snack producer. When customers buy a snack at any of 100 participating retailers the event is recorded in Azure\nEvent Hub. Each retailer is given a unique identifier that is used as the primary identifier for the loyalty program.\nRetailers must be able to be added or removed at any time. Retailers must only be able to record sales for themselves.\nYou need to ensure that retailers can record sales.\nWhat should you do?\n',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Use publisher policies for retailers.',
      'B. Create a partition for each retailer.',
      'C. Define a namespace for each retailer.'
    ]
  },
  {
    id: '816453',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP -\nYou develop and deploy a web app to Azure App Service in a production environment. You scale out the web app to four instances and configure a staging slot to support changes.\nYou must monitor the web app in the environment to include the following requirements:\n✑ Increase web app availability by re-routing requests away from instances with error status codes and automatically replace instances if they remain in an error state after one hour.\n✑ Send web server logs, application logs, standard output, and standard error messaging to an Azure Storage blob account.\nYou need to configure Azure App Service.\nWhich values should you use? To answer, drag the appropriate configuration value to the correct requirements. Each configuration value may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0059400001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0059400002.jpg',
    respuestas: []
  },
  {
    id: '816454',
    topic: 'Topic 6',
    pregunta: "You develop a solution that uses Azure Virtual Machines (VMs).\nThe VMs contain code that must access resources in an Azure resource group. You grant the VM access to the resource group in Resource Manager.\nYou need to obtain an access token that uses the VM's system-assigned managed identity.\nWhich two actions should you perform? Each correct answer presents part of the solution.\n",
    respuestaCorrecta: 'BD',
    respuestas: [
      'A. From the code on the VM, call Azure Resource Manager using an access token.',
      'B. Use PowerShell on a remote machine to make a request to the local managed identity for Azure resources endpoint.',
      'C. Use PowerShell on the VM to make a request to the local managed identity for Azure resources endpoint.',
      'D. From the code on the VM, call Azure Resource Manager using a SAS token.',
      'E. From the code on the VM, generate a user delegation SAS token.'
    ]
  },
  {
    id: '816455',
    topic: 'Topic 6',
    pregunta: 'You are developing a road tollway tracking application that sends tracking events by using Azure Event Hubs using premium tier.\nEach road must have a throttling policy uniquely assigned.\nYou need to configure the event hub to allow for per-road throttling.\nWhat should you do?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Use a unique consumer group for each road.',
      'B. Ensure each road stores events in a different partition.',
      'C. Ensure each road has a unique connection string.',
      'D. Use a unique application group for each road.'
    ]
  },
  {
    id: '816456',
    topic: 'Topic 6',
    pregunta: 'You develop and deploy an ASP.NET Core application that connects to an Azure Database for MySQL instance.\nConnections to the database appear to drop intermittently and the application code does not handle the connection failure.\nYou need to handle the transient connection errors in code by implementing retries.\nWhat are three possible ways to achieve this goal? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'ACD',
    respuestas: [
      'A. Close the database connection and immediately report an error.',
      'B. Disable connection pooling and configure a second Azure Database for MySQL instance.',
      'C. Wait five seconds before repeating the connection attempt to the database.',
      'D. Set a maximum number of connection attempts to 10 and report an error on subsequent connections.',
      'E. Increase connection repeat attempts exponentially up to 120 seconds.'
    ]
  },
  {
    id: '816457',
    topic: 'Topic 6',
    pregunta: 'You are building a B2B web application that uses Azure B2B collaboration for authentication. Paying customers authenticate to Azure B2B using federation.\nThe application allows users to sign up for trial accounts using any email address.\nWhen a user converts to a paying customer, the data associated with the trial should be kept, but the user must authenticate using federation.\nYou need to update the user in Azure Active Directory (Azure AD) when they convert to a paying customer.\nWhich Graph API parameter is used to change authentication from one-time passcodes to federation?\n',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. resetRedemption',
      'B. Status',
      'C. userFlowType',
      'D. invitedUser'
    ]
  },
  {
    id: '860803',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT\n-\n\nYou develop an image upload service that is exposed using Azure API Management. Images are analyzed after upload for automatic tagging.\n\nImages over 500 KB are processed by a different backend that offers a lower tier of service that costs less money. The lower tier of service is denoted by a header named x-large-request. Images over 500 KB must never be processed by backends for smaller images and must always be charged the lower price.\n\nYou need to implement API Management policies to ensure that images are processed correctly.\nHow should you complete the API Management inbound policy? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image414.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image415.png',
    respuestas: []
  },
  {
    id: '860804',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT\n-\n\nYou develop several Azure Functions app functions to process JSON documents from a third-party system. The third-party system publishes events to Azure Event Grid to include hundreds of event types, such as billing, inventory, and shipping updates.\n\nEvents must be sent to a single endpoint for the Azure Functions app to process. The events must be filtered by event type before processing. You must have authorization and authentication control to partition your tenants to receive the event data.\n\nYou need to configure Azure Event Grid.\n\nWhich configuration should you use? To answer, select the appropriate values in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image416.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image417.png',
    respuestas: []
  },
  {
    id: '860805',
    topic: 'Topic 6',
    pregunta: 'A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\n\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.\n\nYou need to complete the configuration.\n\nWhich Azure CLI or PowerShell command should you run?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. \n',
      'B. \n',
      'C. \n',
      'D. \n'
    ]
  },
  {
    id: '882067',
    topic: 'Topic 6',
    pregunta: 'A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\n\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.\n\nYou need to complete the configuration.\n\nWhich Azure CLI or PowerShell command should you run?',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. \n',
      'B. \n',
      'C. \n',
      'D. '
    ]
  },
  {
    id: '882068',
    topic: 'Topic 6',
    pregunta: 'A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\n\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.\n\nYou need to complete the configuration.\n\nWhich Azure CLI or PowerShell command should you run?',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. \n',
      'B. \n',
      'C. \n',
      'D. '
    ]
  },
  {
    id: '882069',
    topic: 'Topic 6',
    pregunta: 'DRAG DROP\n-\n\nYou develop and deploy several APIs to Azure API Management.\n\nYou create the following policy fragment named APICounts:\n\n\n\nThe policy fragment must be reused across various scopes and APIs. The policy fragment must be applied to all APIs and run when a calling system invokes any API.\n\nYou need to implement the policy fragment.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image438.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image440.png',
    respuestas: []
  },
  {
    id: '882070',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT\n-\n\nYou are developing a solution that uses several Azure Service Bus queues. You create an Azure Event Grid subscription for the Azure Service Bus namespace. You use Azure Functions as subscribers to process the messages.\n\nYou need to emit events to Azure Event Grid from the queues. You must use the principal of least privilege and minimize costs.\n\nWhich Azure Service Bus values should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image441.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image442.png',
    respuestas: []
  },
  {
    id: '890559',
    topic: 'Topic 6',
    pregunta: 'You are developing several Azure API Management (APIM) hosted APIs.\n\nThe APIs have the following requirements:\n\n• Require a subscription key to access all APIs.\n• Include terms of use that subscribers must accept to use the APIs.\n• Administrators must review and accept or reject subscription attempts.\n• Limit the count of multiple simultaneous subscriptions.\n\nYou need to implement the APIs.\n\nWhat should you do?',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Configure and apply header-based versioning.',
      'B. Create and publish a product.',
      'C. Configure and apply query string-based versioning.',
      'D. Add a new revision to all APIs. Make the revisions current and add a change log entry.'
    ]
  },
  {
    id: '890560',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT\n-\n\nYou are developing a solution by using the Azure Event Hubs SDK. You create a standard Azure Event Hub with 16 partitions. You implement eight event processor clients.\n\nYou must balance the load dynamically when an event processor client fails. When an event processor client fails, another event processor must continue processing from the exact point at which the failure occurred. All events must be aggregate and upload to an Azure Blob storage account.\n\nYou need to implement event processing recovery for the solution.\n\nWhich SDK features should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image457.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image458.png',
    respuestas: []
  },
  {
    id: '890561',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT\n-\n\nYou are developing a new API to be hosted by Azure API Management (APIM). The backend service that implements the API has not been completed. You are creating a test API and operation.\n\nYou must enable developers to continue with the implementation and testing of the APIM instance integrations while you complete the backend API development.\n\nYou need to configure a test API response.\n\nHow should you complete the configuration? To answer, select the appropriate options in the answer area.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image459.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image460.png',
    respuestas: []
  },
  {
    id: '890562',
    topic: 'Topic 6',
    pregunta: 'You are developing several Azure API Management (APIM) hosted APIs.\n\nYou must inspect request processing of the APIs in APIM. Requests to APIM by using a REST client must also be included. The request inspection must include the following information:\n\n• requests APIM sent to the API backend and the response it received\n• policies applied to the response before sending back to the caller\n• errors that occurred during the processing of the request and the policies applied to the errors\n• original request APIM received from the caller and the policies applied to the request\n\nYou need to inspect the APIs.\n\nWhich three actions should you do? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'ACE',
    respuestas: [
      'A. Enable the Allow tracing setting for the subscription used to inspect the API.',
      'B. Add the Ocp-Apim-Trace header value to the API call whit a value set to true.',
      'C. Add the Ocp-Apim-Subscription-Key header value to the key for a subscription that allows access to the API.',
      'D. Create and configure a custom policy. Apply the policy to the inbound policy section with a global scope.',
      'E. Create and configure a custom policy. Apply the policy to the outbound policy section with an API scope.'
    ]
  },
  {
    id: '892690',
    topic: 'Topic 6',
    pregunta: 'A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\n\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.\n\nYou need to complete the configuration.\n\nWhich Azure CLI or PowerShell command should you run?',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Get-AzureRmServiceBusKey      \n-ResourceGroupName fridge-rg      \n-Namespace fridge-ns      \n-Name RootManageSharedAccessKey',
      'B. New-AzureRmResourceGroup      \n-Name fridge-rg      \n-Location fridge-loc',
      'C. New-AzureRmServiceBusNamespace      \n -ResourceGroupName fridge-rg      \n -NamespaceName fridge-ns      \n -Location fridge-loc',
      'D. New-AzureRmServiceBusQueue      \n -ResourceGroupName fridge-rg      \n -NamespaceName fridge-ns      \n -Name fridge-q      \n -EnablePartitioning $False'
    ]
  },
  {
    id: '892691',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT\n-\n\nYou plan to implement an Azure Functions app.\n\nThe Azure Functions app has the following requirements:\n\n• Must be triggered by a message placed in an Azure Storage queue.\n• Must use the queue name set by an app setting named input_queue.\n• Must create an Azure Blob Storage named the same as the content of the message.\n\nYou need to identify how to reference the queue and blob name in the function.json file of the Azure Functions app.\n\nHow should you reference the names? To answer, select the appropriate values in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image471.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image472.png',
    respuestas: []
  },
  {
    id: '892692',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT\n-\n\nYou have an Azure API Management instance named API1 that uses a managed gateway.\n\nYou plan to implement a policy that will apply at a product scope and will set the header of inbound requests to include information about the region hosting the gateway of API1. The policy definition contains the following content:\n\n\n\nYou have the following requirements for the policy definition:\n\n• Ensure that the header contains the information about the region hosting the gateway of API1.\n• Ensure the policy applies only after any global level policies are processed first.\n\nYou need to complete the policy definition.\n\nWhich values should you choose? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image473.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image475.png',
    respuestas: []
  },
  {
    id: '892693',
    topic: 'Topic 6',
    pregunta: 'You are developing several Azure API Management (APIM) hosted APIs.\n\nYou must make several minor and non-breaking changes to one of the APIs. The API changes include the following requirements:\n\n• Must not disrupt callers of the API.\n• Enable roll back if you find issues.\n• Documented to enable developers to understand what is new.\n• Tested before publishing.\n\nYou need to update the API.\n\nWhat should you do?',
    respuestaCorrecta: 'E',
    respuestas: [
      'A. Configure and apply header-based versioning.',
      'B. Create and publish a product.',
      'C. Configure and apply a custom policy.',
      'D. Add a new revision to the API.',
      'E. Configure and apply query string-based versioning.'
    ]
  },
  {
    id: '892694',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT\n-\n\nYou are developing an application to store millions of images in Azure blob storage.\n\nThe application has the following requirements:\n\n• Store the Exif (exchangeable image file format) data from the image as blob metadata when the application uploads the image.\n• Retrieve the Exif data from the image while minimizing bandwidth and processing time.\n• Utilizes the REST API.\n\nYou need to use the image Exif data as blob metadata in the application.\n\nWhich HTTP verbs should you use? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image476.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image477.png',
    respuestas: []
  },
  {
    id: '892695',
    topic: 'Topic 6',
    pregunta: 'You are developing several microservices to run on Azure Container Apps for a company. External TCP ingress traffic from the internet has been enabled for the microservices.\n\nThe company requires that the microservices must scale based on an Azure Event Hub trigger.\n\nYou need to scale the microservices by using a custom scaling rule.\n\nWhich two Kubernetes Event-driven Autoscaling (KEDA) trigger fields should you use? Each correct answer presents part of the solution.\n\nNOTE: Each correct selection is worth one point.',
    respuestaCorrecta: 'AB',
    respuestas: [
      'A. metadata',
      'B. type',
      'C. authenticationRef',
      'D. name',
      'E. metricType'
    ]
  },
  {
    id: '900748',
    topic: 'Topic 6',
    pregunta: 'A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\n\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.\n\nYou need to complete the configuration.\n\nWhich Azure CLI or PowerShell command should you run?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. \n',
      'B. \n',
      'C. \n',
      'D. '
    ]
  },
  {
    id: '900749',
    topic: 'Topic 6',
    pregunta: 'A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\n\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.\n\nYou need to complete the configuration.\n\nWhich Azure CLI or PowerShell command should you run?',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. \n',
      'B. \n',
      'C. \n',
      'D. '
    ]
  },
  {
    id: '900750',
    topic: 'Topic 6',
    pregunta: 'A company is developing a solution that allows smart refrigerators to send temperature information to a central location.\n\nThe solution must receive and store messages until they can be processed. You create an Azure Service Bus instance by providing a name, pricing tier, subscription, resource group, and location.\n\nYou need to complete the configuration.\n\nWhich Azure CLI or PowerShell command should you run?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. \n',
      'B. \n',
      'C. \n',
      'D. '
    ]
  },
  {
    id: '907860',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou are implementing an application by using Azure Event Grid to push near-real-time information to customers.\n\nYou have the following requirements:\n• You must send events to thousands of customers that include hundreds of various event types.\n• The events must be filtered by event type before processing.\n• Authentication and authorization must be handled by using Microsoft Entra ID.\n• The events must be published to a single endpoint.\n\nYou need to implement Azure Event Grid.\n\nSolution: Publish events to an event domain. Create a custom topic for each customer.\n\nDoes the solution meet the goal?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '907861',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou are implementing an application by using Azure Event Grid to push near-real-time information to customers.\n\nYou have the following requirements:\n• You must send events to thousands of customers that include hundreds of various event types.\n• The events must be filtered by event type before processing.\n• Authentication and authorization must be handled by using Microsoft Entra ID.\n• The events must be published to a single endpoint.\n\nYou need to implement Azure Event Grid.\n\nSolution: Publish events to a custom topic. Create an event subscription for each customer.\n\nDoes the solution meet the goal?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '907862',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou are implementing an application by using Azure Event Grid to push near-real-time information to customers.\n\nYou have the following requirements:\n• You must send events to thousands of customers that include hundreds of various event types.\n• The events must be filtered by event type before processing.\n• Authentication and authorization must be handled by using Microsoft Entra ID.\n• The events must be published to a single endpoint.\n\nYou need to implement Azure Event Grid.\n\nSolution: Enable ingress, create a TCP scale rule, and apply the rule to the container app.\n\nDoes the solution meet the goal?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '907863',
    topic: 'Topic 6',
    pregunta: 'HOTSPOT\n-\n\n\nCase study\n-\n\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\n\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\n\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\n\nTo start the case study\n-\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\n\nBackground\n-\n\nMunson’s Pickles and Preserves Farm is an agricultural cooperative corporation based in Washington, US, with farms located across the United States. The company supports agricultural production resources by distributing seeds fertilizers, chemicals, fuel, and farm machinery to the farms.\n\n\nCurrent Environment\n-\n\nThe company is migrating all applications from an on-premises datacenter to Microsoft Azure. Applications support distributors, farmers, and internal company staff.\n\n\nCorporate website\n-\n• The company hosts a public website located at http://www.munsonspicklesandpreservesfarm.com. The site supports farmers and distributors who request agricultural production resources.\n\n\nFarms\n-\n• The company created a new customer tenant in the Microsoft Entra admin center to support authentication and authorization for applications.\n\n\nDistributors\n-\n• Distributors integrate their applications with data that is accessible by using APIs hosted at http://www.munsonspicklesandpreservesfarm.com/api to receive and update resource data.\n\n\nRequirements\n-\n\nThe application components must meet the following requirements:\n\n\nCorporate website\n-\n• The site must be migrated to Azure App Service.\n• Costs must be minimized when hosting in Azure.\n• Applications must automatically scale independent of the compute resources.\n• All code changes must be validated by internal staff before release to production.\n• File transfer speeds must improve, and webpage-load performance must increase.\n• All site settings must be centrally stored, secured without using secrets, and encrypted at rest and in transit.\n• A queue-based load leveling pattern must be implemented by using Azure Service Bus queues to support high volumes of website agricultural production resource requests.\n\n\nFarms\n-\n• Farmers must authenticate to applications by using Microsoft Entra ID.\n\n\nDistributors\n-\n• The company must track a custom telemetry value with each API call and monitor performance of all APIs.\n• API telemetry values must be charted to evaluate variations and trends for resource data.\n\n\nInternal staff\n-\n• App and API updates must be validated before release to production.\n• Staff must be able to select a link to direct them back to the production app when validating an app or API update.\n• Staff profile photos and email must be displayed on the website once they authenticate to applications by using their Microsoft Entra ID.\n\n\nSecurity\n-\n• All web communications must be secured by using TLS/HTTPS.\n• Web content must be restricted by country/region to support corporate compliance standards.\n• The principle of least privilege must be applied when providing any user rights or process access rights.\n• Managed identities for Azure resources must be used to authenticate services that support Microsoft Entra ID authentication.\n\n\nIssues\n-\n\n\nCorporate website\n-\n• Farmers report HTTP 503 errors at the same time as internal staff report that CPU and memory usage are high.\n• Distributors report HTTP 502 errors at the same time as internal staff report that average response times and networking traffic are high.\n• Internal staff report webpage load sizes are large and take a long time to load.\n• Developers receive authentication errors to Service Bus when they debug locally.\n\n\nDistributors\n-\n• Many API telemetry values are sent in a short period of time. Telemetry traffic, data costs, and storage costs must be reduced while preserving a statistically correct analysis of the data points sent by the APIs.\n\n\nYou need to provide internal staff access to the production site after a validation.\n\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\n\nNOTE: Each correct selection is worth one point.\n\n',
    imgPregunta: 'https://img.examtopics.com/az-204/image519.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://img.examtopics.com/az-204/image520.png',
    respuestas: []
  },
  {
    id: '907864',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou are implementing an application by using Azure Event Grid to push near-real-time information to customers.\n\nYou have the following requirements:\n• You must send events to thousands of customers that include hundreds of various event types.\n• The events must be filtered by event type before processing.\n• Authentication and authorization must be handled by using Microsoft Entra ID.\n• The events must be published to a single endpoint.\n\nYou need to implement Azure Event Grid.\n\nSolution: Publish events to a partner topic. Create an event subscription for each customer.\n\nDoes the solution meet the goal?',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '907865',
    topic: 'Topic 6',
    pregunta: 'Note: This question is part of a series of questions that present the same scenario. Each question in the series contains a unique solution that might meet the stated goals. Some question sets might have more than one correct solution, while others might not have a correct solution.\n\nAfter you answer a question in this section, you will NOT be able to return to it. As a result, these questions will not appear in the review screen.\n\nYou are implementing an application by using Azure Event Grid to push near-real-time information to customers.\n\nYou have the following requirements:\n• You must send events to thousands of customers that include hundreds of various event types.\n• The events must be filtered by event type before processing.\n• Authentication and authorization must be handled by using Microsoft Entra ID.\n• The events must be published to a single endpoint.\n\nYou need to implement Azure Event Grid.\n\nSolution: Publish events to a system topic. Create an event subscription for each customer.\n\nDoes the solution meet the goal?',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Yes',
      'B. No'
    ]
  },
  {
    id: '816458',
    topic: 'Topic 7',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply chain operations and would like to leverage serverless computing where possible.\n\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workflows:\nOcean Transport `\" This workflow gathers and validates container information including container contents and arrival notices at various shipping ports.\nInland Transport `\" This workflow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\n\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\n\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\n\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure Site Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host BizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\n\n\nRequirements -\n\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workflows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a fixed costing model.\nMaintain on-premises connectivity to support legacy applications and final BizTalk migrations.\n\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\n\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\n\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\n\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\n\nIssues -\n\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must enable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\n\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nHOTSPOT -\nYou need to configure Azure CDN for the Shipping web site.\nWhich configuration options should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0004000001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0004300001.jpg',
    respuestas: []
  },
  {
    id: '816459',
    topic: 'Topic 7',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply chain operations and would like to leverage serverless computing where possible.\n\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workflows:\nOcean Transport `\" This workflow gathers and validates container information including container contents and arrival notices at various shipping ports.\nInland Transport `\" This workflow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\n\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\n\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\n\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure Site Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host BizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\n\n\nRequirements -\n\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workflows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a fixed costing model.\nMaintain on-premises connectivity to support legacy applications and final BizTalk migrations.\n\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\n\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\n\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\n\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\n\nIssues -\n\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must enable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\n\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nHOTSPOT -\nYou need to correct the VM issues.\nWhich tools should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0004000001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0004600001.jpg',
    respuestas: []
  },
  {
    id: '816460',
    topic: 'Topic 8',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an ASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\n\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details the processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for reimbursement.\n\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\n\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\n\nDocumentation -\nEmployees are provided with a getting started document when they first use the solution. The documentation includes details on supported operating systems for\nAzure File upload, and instructions on how to configure the mounted folder.\n\nSolution details -\n\nUsers table -\n\n\nWeb Application -\nYou enable MSI for the Web App and configure the Web App to use the security principal name WebAppIdentity.\n\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored in Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must remain valid if the email is forwarded to another user.\n\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter logging enabled.\nApplication Insights must always contain all log messages.\n\nRequirements -\n\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\n\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that data in the DR region is up to date.\n\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is the only system that should have access to SecurityPins.\nAll certificates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the last segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\n\nIssues -\n\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the Azure File\nShare, the receipt does not appear in their profile. When this occurs, they delete the file in the file share and use the web application, which returns a 500 Internal\nServer error page.\n\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\n\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\n\nApplication code -\n\nProcessing.cs -\n\n\nDatabase.cs -\n\n\nReceiptUploader.cs -\n\n\nConfigureSSE.ps1 -\n\nQuestion\nDRAG DROP -\nYou need to add code at line PC32 in Processing.cs to implement the GetCredentials method in the Processing class.\nHow should you complete the code? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0018400001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0019000002.jpg',
    respuestas: []
  },
  {
    id: '816461',
    topic: 'Topic 8',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an ASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\n\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details the processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for reimbursement.\n\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\n\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\n\nDocumentation -\nEmployees are provided with a getting started document when they first use the solution. The documentation includes details on supported operating systems for\nAzure File upload, and instructions on how to configure the mounted folder.\n\nSolution details -\n\nUsers table -\n\n\nWeb Application -\nYou enable MSI for the Web App and configure the Web App to use the security principal name WebAppIdentity.\n\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored in Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must remain valid if the email is forwarded to another user.\n\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter logging enabled.\nApplication Insights must always contain all log messages.\n\nRequirements -\n\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\n\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that data in the DR region is up to date.\n\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is the only system that should have access to SecurityPins.\nAll certificates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the last segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\n\nIssues -\n\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the Azure File\nShare, the receipt does not appear in their profile. When this occurs, they delete the file in the file share and use the web application, which returns a 500 Internal\nServer error page.\n\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\n\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\n\nApplication code -\n\nProcessing.cs -\n\n\nDatabase.cs -\n\n\nReceiptUploader.cs -\n\n\nConfigureSSE.ps1 -\n\nQuestion\nDRAG DROP -\nYou need to ensure disaster recovery requirements are met.\nWhat code should you add at line PC16?\nTo answer, drag the appropriate code fragments to the correct locations. Each code fragment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0018400001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0019200001.jpg',
    respuestas: []
  },
  {
    id: '816462',
    topic: 'Topic 9',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient applications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application consists of five modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to support label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\n\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reflect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\n\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\n\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service (AKS) cluster.\n\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted on Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\n\nArchitecture -\n\n\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workflow fails to run upon initial deployment to Azure.\n\nOrder.json -\nRelevant portions of the app files are shown below. Line numbers are included for reference only.\nThis JSON file contains a representation of the data for an order that includes a single item.\n\nOrder.json -\n\nQuestion\nHOTSPOT -\nYou need to configure Azure Cosmos DB.\nWhich settings should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0019400003.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0020000001.jpg',
    respuestas: []
  },
  {
    id: '816463',
    topic: 'Topic 9',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient applications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application consists of five modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to support label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\n\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reflect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\n\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\n\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service (AKS) cluster.\n\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted on Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\n\nArchitecture -\n\n\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workflow fails to run upon initial deployment to Azure.\n\nOrder.json -\nRelevant portions of the app files are shown below. Line numbers are included for reference only.\nThis JSON file contains a representation of the data for an order that includes a single item.\n\nOrder.json -\n\nQuestion\nHOTSPOT -\nYou need to retrieve all order line items from Order.json and sort the data alphabetically by the city.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0019400003.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0020300001.jpg',
    respuestas: []
  },
  {
    id: '816464',
    topic: 'Topic 10',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to implement the Azure Function for delivery driver profile information.\nWhich configurations should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0027400001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0027500001.jpg',
    respuestas: []
  },
  {
    id: '816465',
    topic: 'Topic 10',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nYou need to grant access to the retail store location data for the inventory service development effort.\nWhat should you use?\n',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Azure AD access token',
      'B. Azure RBAC role',
      'C. Shared access signature (SAS) token',
      'D. Azure AD ID token',
      'E. Azure AD refresh token'
    ]
  },
  {
    id: '816466',
    topic: 'Topic 10',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to reliably identify the delivery driver profile information.\nHow should you configure the system? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0027800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0027900001.png',
    respuestas: []
  },
  {
    id: '816467',
    topic: 'Topic 10',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nYou need to secure the Azure Functions to meet the security requirements.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'AD',
    respuestas: [
      'A. Store the RSA-HSM key in Azure Key Vault with soft-delete and purge-protection features enabled.',
      'B. Store the RSA-HSM key in Azure Blob storage with an immutability policy applied to the container.',
      'C. Create a free tier Azure App Configuration instance with a new Azure AD service principal.',
      'D. Create a standard tier Azure App Configuration instance with an assigned Azure AD managed identity.',
      'E. Store the RSA-HSM key in Azure Cosmos DB. Apply the built-in policies for customer-managed keys and allowed locations.'
    ]
  },
  {
    id: '816468',
    topic: 'Topic 11',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nDRAG DROP -\nYou need to add markup at line AM04 to implement the ContentReview role.\nHow should you complete the markup? To answer, drag the appropriate json segments to the correct locations. Each json segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0028500001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0028700002.jpg',
    respuestas: []
  },
  {
    id: '816469',
    topic: 'Topic 11',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nHOTSPOT -\nYou need to add code at line AM09 to ensure that users can review content using ContentAnalysisService.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0028500001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0029000001.jpg',
    respuestas: []
  },
  {
    id: '816470',
    topic: 'Topic 11',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nHOTSPOT -\nYou need to ensure that network security policies are met.\nHow should you configure network security? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0028500001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0029200001.jpg',
    respuestas: []
  },
  {
    id: '816471',
    topic: 'Topic 11',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nDRAG DROP -\nYou need to add YAML markup at line CS17 to ensure that the ContentUploadService can access Azure Storage access keys.\nHow should you complete the YAML markup? To answer, drag the appropriate YAML segments to the correct locations. Each YAML segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0028500001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0029400002.jpg',
    respuestas: []
  },
  {
    id: '816472',
    topic: 'Topic 11',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nHOTSPOT -\nYou need to add code at line AM10 of the application manifest to ensure that the requirement for manually reviewing content can be met.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0028500001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0029700001.jpg',
    respuestas: []
  },
  {
    id: '816473',
    topic: 'Topic 12',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply chain operations and would like to leverage serverless computing where possible.\n\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workflows:\nOcean Transport `\" This workflow gathers and validates container information including container contents and arrival notices at various shipping ports.\nInland Transport `\" This workflow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\n\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\n\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\n\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure Site Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host BizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\n\n\nRequirements -\n\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workflows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a fixed costing model.\nMaintain on-premises connectivity to support legacy applications and final BizTalk migrations.\n\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\n\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\n\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\n\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\n\nIssues -\n\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must enable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\n\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nHOTSPOT -\nYou need to secure the Shipping Function app.\nHow should you configure the app? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0030000001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0030300001.jpg',
    respuestas: []
  },
  {
    id: '816474',
    topic: 'Topic 12',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply chain operations and would like to leverage serverless computing where possible.\n\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workflows:\nOcean Transport `\" This workflow gathers and validates container information including container contents and arrival notices at various shipping ports.\nInland Transport `\" This workflow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\n\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\n\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\n\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure Site Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host BizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\n\n\nRequirements -\n\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workflows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a fixed costing model.\nMaintain on-premises connectivity to support legacy applications and final BizTalk migrations.\n\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\n\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\n\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\n\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\n\nIssues -\n\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must enable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\n\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nYou need to secure the Shipping Logic App.\nWhat should you use?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0030000001.jpg',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Azure App Service Environment (ASE)',
      'B. Integration Service Environment (ISE)',
      'C. VNet service endpoint',
      'D. Azure AD B2B integration'
    ]
  },
  {
    id: '816475',
    topic: 'Topic 13',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nHOTSPOT -\nYou need to retrieve the database connection string.\nWhich values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0030600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0031000001.png',
    respuestas: []
  },
  {
    id: '816476',
    topic: 'Topic 13',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nDRAG DROP -\nYou need to correct the corporate website error.\nWhich four actions should you recommend be performed in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0030600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0031200001.jpg',
    respuestas: []
  },
  {
    id: '816477',
    topic: 'Topic 13',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nHOTSPOT -\nYou need to configure API Management for authentication.\nWhich policy values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0030600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0031400001.png',
    respuestas: []
  },
  {
    id: '816478',
    topic: 'Topic 13',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nYou need to authenticate the user to the corporate website as indicated by the architectural diagram.\nWhich two values should you use? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0030600001.png',
    respuestaCorrecta: 'AD',
    respuestas: [
      'A. ID token signature',
      'B. ID token claims',
      'C. HTTP response code',
      'D. Azure AD endpoint URI',
      'E. Azure AD tenant ID'
    ]
  },
  {
    id: '816479',
    topic: 'Topic 13',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nHOTSPOT -\nYou need to correct the Azure Logic app error message.\nWhich configuration values should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0030600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0031700001.png',
    respuestas: []
  },
  {
    id: '816480',
    topic: 'Topic 13',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nHOTSPOT -\nYou need to configure Azure Service Bus to Event Grid integration.\nWhich Azure Service Bus settings should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0030600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0031900001.png',
    respuestas: []
  },
  {
    id: '816481',
    topic: 'Topic 14',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an ASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\n\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details the processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for reimbursement.\n\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\n\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\n\nDocumentation -\nEmployees are provided with a getting started document when they first use the solution. The documentation includes details on supported operating systems for\nAzure File upload, and instructions on how to configure the mounted folder.\n\nSolution details -\n\nUsers table -\n\n\nWeb Application -\nYou enable MSI for the Web App and configure the Web App to use the security principal name WebAppIdentity.\n\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored in Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must remain valid if the email is forwarded to another user.\n\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter logging enabled.\nApplication Insights must always contain all log messages.\n\nRequirements -\n\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\n\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that data in the DR region is up to date.\n\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is the only system that should have access to SecurityPins.\nAll certificates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the last segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\n\nIssues -\n\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the Azure File\nShare, the receipt does not appear in their profile. When this occurs, they delete the file in the file share and use the web application, which returns a 500 Internal\nServer error page.\n\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\n\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\n\nApplication code -\n\nProcessing.cs -\n\n\nDatabase.cs -\n\n\nReceiptUploader.cs -\n\n\nConfigureSSE.ps1 -\n\nQuestion\nHOTSPOT -\nYou need to add code at line PC26 of Processing.cs to ensure that security policies are met.\nHow should you complete the code that you will add at line PC26? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0032100001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0032800001.jpg',
    respuestas: []
  },
  {
    id: '816482',
    topic: 'Topic 14',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an ASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\n\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details the processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for reimbursement.\n\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\n\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\n\nDocumentation -\nEmployees are provided with a getting started document when they first use the solution. The documentation includes details on supported operating systems for\nAzure File upload, and instructions on how to configure the mounted folder.\n\nSolution details -\n\nUsers table -\n\n\nWeb Application -\nYou enable MSI for the Web App and configure the Web App to use the security principal name WebAppIdentity.\n\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored in Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must remain valid if the email is forwarded to another user.\n\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter logging enabled.\nApplication Insights must always contain all log messages.\n\nRequirements -\n\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\n\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that data in the DR region is up to date.\n\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is the only system that should have access to SecurityPins.\nAll certificates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the last segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\n\nIssues -\n\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the Azure File\nShare, the receipt does not appear in their profile. When this occurs, they delete the file in the file share and use the web application, which returns a 500 Internal\nServer error page.\n\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\n\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\n\nApplication code -\n\nProcessing.cs -\n\n\nDatabase.cs -\n\n\nReceiptUploader.cs -\n\n\nConfigureSSE.ps1 -\n\nQuestion\nYou need to ensure the security policies are met.\nWhat code do you add at line CS07 of ConfigureSSE.ps1?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0032100001.png',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. ג€"PermissionsToKeys create, encrypt, decrypt',
      'B. ג€"PermissionsToCertificates create, encrypt, decrypt',
      'C. ג€"PermissionsToCertificates wrapkey, unwrapkey, get',
      'D. ג€"PermissionsToKeys wrapkey, unwrapkey, get'
    ]
  },
  {
    id: '816483',
    topic: 'Topic 15',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nYou need to reduce read latency for the retail store solution.\nWhat are two possible ways to achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'BC',
    respuestas: [
      'A. Create a new composite index for the store location data queries in Azure Cosmos DB. Modify the queries to support parameterized SQL and update the Azure Function app to call the new queries.',
      'B. Provision an Azure Cosmos DB dedicated gateway. Update the Azure Function app connection string to use the new dedicated gateway endpoint.',
      'C. Configure Azure Cosmos DB consistency to session consistency. Cache session tokens in a new Azure Redis cache instance after every write. Update reads to use the session token stored in Azure Redis.',
      'D. Provision an Azure Cosmos DB dedicated gateway. Update blob storage to use the new dedicated gateway endpoint.',
      'E. Configure Azure Cosmos DB consistency to strong consistency. Increase the RUs for the container supporting store location data.'
    ]
  },
  {
    id: '816484',
    topic: 'Topic 15',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nYou need to audit the retail store sales transactions.\nWhat are two possible ways to achieve the goal? Each correct answer presents a complete solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'BE',
    respuestas: [
      'A. Update the retail store location data upload process to include blob index tags. Create an Azure Function to process the blob index tags and filter by store location.',
      'B. Process the change feed logs of the Azure Blob storage account by using an Azure Function. Specify a time range for the change feed data.',
      'C. Enable blob versioning for the storage account. Use an Azure Function to process a list of the blob versions per day.',
      'D. Process an Azure Storage blob inventory report by using an Azure Function. Create rule filters on the blob inventory report.',
      'E. Subscribe to blob storage events by using an Azure Function and Azure Event Grid. Filter the events by store location.'
    ]
  },
  {
    id: '816485',
    topic: 'Topic 16',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nYou need to monitor ContentUploadService according to the requirements.\nWhich command should you use?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0042100001.jpg',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. az monitor metrics alert create ג€"n alert ג€"g ג€¦ - -scopes ג€¦ - -condition "avg Percentage CPU > 8"',
      'B. az monitor metrics alert create ג€"n alert ג€"g ג€¦ - -scopes ג€¦ - -condition "avg Percentage CPU > 800"',
      'C. az monitor metrics alert create ג€"n alert ג€"g ג€¦ - -scopes ג€¦ - -condition "CPU Usage > 800"',
      'D. az monitor metrics alert create ג€"n alert ג€"g ג€¦ - -scopes ג€¦ - -condition "CPU Usage > 8"'
    ]
  },
  {
    id: '816486',
    topic: 'Topic 16',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nYou need to investigate the http server log output to resolve the issue with the ContentUploadService.\nWhich command should you use first?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0042100001.jpg',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. az webapp log',
      'B. az ams live-output',
      'C. az monitor activity-log',
      'D. az container attach'
    ]
  },
  {
    id: '816487',
    topic: 'Topic 17',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nYou need to investigate the Azure Function app error message in the development environment.\nWhat should you do?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0042500001.png',
    respuestaCorrecta: 'A',
    respuestas: [
      'A. Connect Live Metrics Stream from Application Insights to the Azure Function app and filter the metrics.',
      'B. Create a new Azure Log Analytics workspace and instrument the Azure Function app with Application Insights.',
      'C. Update the Azure Function app with extension methods from Microsoft.Extensions.Logging to log events by using the log instance.',
      'D. Add a new diagnostic setting to the Azure Function app to send logs to Log Analytics.'
    ]
  },
  {
    id: '816488',
    topic: 'Topic 17',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nHOTSPOT -\nYou need to configure security and compliance for the corporate website files.\nWhich Azure Blob storage settings should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0042500001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0043000001.png',
    respuestas: []
  },
  {
    id: '816489',
    topic: 'Topic 18',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nYou need to correct the RequestUserApproval Function app error.\nWhat should you do?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0004900001.png',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Update line RA13 to use the async keyword and return an HttpRequest object value.',
      'B. Configure the Function app to use an App Service hosting plan. Enable the Always On setting of the hosting plan.',
      'C. Update the function to be stateful by using Durable Functions to process the request payload.',
      'D. Update the functionTimeout property of the host.json project file to 15 minutes.'
    ]
  },
  {
    id: '816490',
    topic: 'Topic 19',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal services, external services, and applications. The application will also provide a shared library for common functionality.\n\nRequirements -\n\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application reacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID field in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\n\nPolicies -\n\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log files should be saved to a container named logdrop. Logs must remain in the container for 15 days.\n\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign outs must be processed as quickly as possible.\n\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib library must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\n\nOther -\n\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The model is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\n\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\n\nIssues -\n\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\n\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\n\nNotification latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\n\nApp code -\n\nEventGridController.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\n\nLoginEvent.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\nQuestion\nDRAG DROP -\nYou need to implement the Log policy.\nHow should you complete the Azure Event Grid subscription? To answer, drag the appropriate JSON segments to the correct locations. Each JSON segment may be used once, more than once, or not at all. You may need to drag the split bar between panes to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0043500001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0043700002.png',
    respuestas: []
  },
  {
    id: '816491',
    topic: 'Topic 19',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal services, external services, and applications. The application will also provide a shared library for common functionality.\n\nRequirements -\n\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application reacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID field in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\n\nPolicies -\n\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log files should be saved to a container named logdrop. Logs must remain in the container for 15 days.\n\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign outs must be processed as quickly as possible.\n\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib library must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\n\nOther -\n\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The model is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\n\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\n\nIssues -\n\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\n\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\n\nNotification latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\n\nApp code -\n\nEventGridController.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\n\nLoginEvent.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\nQuestion\nYou need to ensure that the solution can meet the scaling requirements for Policy Service.\nWhich Azure Application Insights data model should you use?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0043500001.png',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. an Application Insights dependency',
      'B. an Application Insights event',
      'C. an Application Insights trace',
      'D. an Application Insights metric'
    ]
  },
  {
    id: '816492',
    topic: 'Topic 19',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal services, external services, and applications. The application will also provide a shared library for common functionality.\n\nRequirements -\n\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application reacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID field in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\n\nPolicies -\n\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log files should be saved to a container named logdrop. Logs must remain in the container for 15 days.\n\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign outs must be processed as quickly as possible.\n\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib library must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\n\nOther -\n\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The model is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\n\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\n\nIssues -\n\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\n\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\n\nNotification latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\n\nApp code -\n\nEventGridController.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\n\nLoginEvent.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\nQuestion\nDRAG DROP -\nYou need to implement telemetry for non-user actions.\nHow should you complete the Filter class? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0043500001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0044100001.png',
    respuestas: []
  },
  {
    id: '816493',
    topic: 'Topic 19',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal services, external services, and applications. The application will also provide a shared library for common functionality.\n\nRequirements -\n\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application reacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID field in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\n\nPolicies -\n\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log files should be saved to a container named logdrop. Logs must remain in the container for 15 days.\n\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign outs must be processed as quickly as possible.\n\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib library must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\n\nOther -\n\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The model is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\n\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\n\nIssues -\n\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\n\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\n\nNotification latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\n\nApp code -\n\nEventGridController.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\n\nLoginEvent.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\nQuestion\nDRAG DROP -\nYou need to ensure that PolicyLib requirements are met.\nHow should you complete the code segment? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0043500001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0044200002.png',
    respuestas: []
  },
  {
    id: '816494',
    topic: 'Topic 20',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an ASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\n\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details the processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for reimbursement.\n\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\n\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\n\nDocumentation -\nEmployees are provided with a getting started document when they first use the solution. The documentation includes details on supported operating systems for\nAzure File upload, and instructions on how to configure the mounted folder.\n\nSolution details -\n\nUsers table -\n\n\nWeb Application -\nYou enable MSI for the Web App and configure the Web App to use the security principal name WebAppIdentity.\n\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored in Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must remain valid if the email is forwarded to another user.\n\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter logging enabled.\nApplication Insights must always contain all log messages.\n\nRequirements -\n\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\n\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that data in the DR region is up to date.\n\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is the only system that should have access to SecurityPins.\nAll certificates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the last segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\n\nIssues -\n\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the Azure File\nShare, the receipt does not appear in their profile. When this occurs, they delete the file in the file share and use the web application, which returns a 500 Internal\nServer error page.\n\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\n\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\n\nApplication code -\n\nProcessing.cs -\n\n\nDatabase.cs -\n\n\nReceiptUploader.cs -\n\n\nConfigureSSE.ps1 -\n\nQuestion\nYou need to ensure receipt processing occurs correctly.\nWhat should you do?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0044500001.png',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Use blob properties to prevent concurrency problems',
      'B. Use blob SnapshotTime to prevent concurrency problems',
      'C. Use blob metadata to prevent concurrency problems',
      'D. Use blob leases to prevent concurrency problems'
    ]
  },
  {
    id: '816495',
    topic: 'Topic 20',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an ASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\n\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details the processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for reimbursement.\n\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\n\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\n\nDocumentation -\nEmployees are provided with a getting started document when they first use the solution. The documentation includes details on supported operating systems for\nAzure File upload, and instructions on how to configure the mounted folder.\n\nSolution details -\n\nUsers table -\n\n\nWeb Application -\nYou enable MSI for the Web App and configure the Web App to use the security principal name WebAppIdentity.\n\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored in Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must remain valid if the email is forwarded to another user.\n\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter logging enabled.\nApplication Insights must always contain all log messages.\n\nRequirements -\n\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\n\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that data in the DR region is up to date.\n\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is the only system that should have access to SecurityPins.\nAll certificates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the last segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\n\nIssues -\n\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the Azure File\nShare, the receipt does not appear in their profile. When this occurs, they delete the file in the file share and use the web application, which returns a 500 Internal\nServer error page.\n\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\n\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\n\nApplication code -\n\nProcessing.cs -\n\n\nDatabase.cs -\n\n\nReceiptUploader.cs -\n\n\nConfigureSSE.ps1 -\n\nQuestion\nYou need to resolve the capacity issue.\nWhat should you do?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0044500001.png',
    respuestaCorrecta: 'D',
    respuestas: [
      'A. Convert the trigger on the Azure Function to an Azure Blob storage trigger',
      'B. Ensure that the consumption plan is configured correctly to allow scaling',
      'C. Move the Azure Function to a dedicated App Service Plan',
      'D. Update the loop starting on line PC09 to process items in parallel'
    ]
  },
  {
    id: '816496',
    topic: 'Topic 20',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. If the case study has an All Information tab, note that the information displayed is identical to the information displayed on the subsequent tabs. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Litware Inc., a SaaS company that provides a solution for managing employee expenses. The solution consists of an ASP.NET Core Web\nAPI project that is deployed as an Azure Web App.\n\nOverall architecture -\nEmployees upload receipts for the system to process. When processing is complete, the employee receives a summary report email that details the processing results. Employees then use a web application to manage their receipts and perform any additional tasks needed for reimbursement.\n\nReceipt processing -\nEmployees may upload receipts in two ways:\nUploading using an Azure Files mounted folder\nUploading using the web application\n\nData Storage -\nReceipt and employee information is stored in an Azure SQL database.\n\nDocumentation -\nEmployees are provided with a getting started document when they first use the solution. The documentation includes details on supported operating systems for\nAzure File upload, and instructions on how to configure the mounted folder.\n\nSolution details -\n\nUsers table -\n\n\nWeb Application -\nYou enable MSI for the Web App and configure the Web App to use the security principal name WebAppIdentity.\n\nProcessing -\nProcessing is performed by an Azure Function that uses version 2 of the Azure Function runtime. Once processing is completed, results are stored in Azure Blob\nStorage and an Azure SQL database. Then, an email summary is sent to the user with a link to the processing report. The link to the report must remain valid if the email is forwarded to another user.\n\nLogging -\nAzure Application Insights is used for telemetry and logging in both the processor and the web application. The processor also has TraceWriter logging enabled.\nApplication Insights must always contain all log messages.\n\nRequirements -\n\nReceipt processing -\nConcurrent processing of a receipt must be prevented.\n\nDisaster recovery -\nRegional outage must not impact application availability. All DR operations must not be dependent on application running and must ensure that data in the DR region is up to date.\n\nSecurity -\nUser's SecurityPin must be stored in such a way that access to the database does not allow the viewing of SecurityPins. The web application is the only system that should have access to SecurityPins.\nAll certificates and secrets used to secure data must be stored in Azure Key Vault.\nYou must adhere to the principle of least privilege and provide privileges which are essential to perform the intended function.\nAll access to Azure Storage and Azure SQL database must use the application's Managed Service Identity (MSI).\nReceipt data must always be encrypted at rest.\nAll data must be protected in transit.\nUser's expense account number must be visible only to logged in users. All other views of the expense account number should include only the last segment, with the remaining parts obscured.\nIn the case of a security breach, access to all summary reports must be revoked without impacting other parts of the system.\n\nIssues -\n\nUpload format issue -\nEmployees occasionally report an issue with uploading a receipt using the web application. They report that when they upload a receipt using the Azure File\nShare, the receipt does not appear in their profile. When this occurs, they delete the file in the file share and use the web application, which returns a 500 Internal\nServer error page.\n\nCapacity issue -\nDuring busy periods, employees report long delays between the time they upload the receipt and when it appears in the web application.\n\nLog capacity issue -\nDevelopers report that the number of log messages in the trace output for the processor is too high, resulting in lost log messages.\n\nApplication code -\n\nProcessing.cs -\n\n\nDatabase.cs -\n\n\nReceiptUploader.cs -\n\n\nConfigureSSE.ps1 -\n\nQuestion\nYou need to resolve the log capacity issue.\nWhat should you do?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0044500001.png',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Create an Application Insights Telemetry Filter',
      'B. Change the minimum log level in the host.json file for the function',
      'C. Implement Application Insights Sampling',
      'D. Set a LogCategoryFilter during startup'
    ]
  },
  {
    id: '816497',
    topic: 'Topic 21',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to implement event routing for retail store location data.\nWhich configurations should you use? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0050900001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0051000001.jpg',
    respuestas: []
  },
  {
    id: '816498',
    topic: 'Topic 22',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient applications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application consists of five modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to support label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\n\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reflect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\n\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\n\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service (AKS) cluster.\n\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted on Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\n\nArchitecture -\n\n\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workflow fails to run upon initial deployment to Azure.\n\nOrder.json -\nRelevant portions of the app files are shown below. Line numbers are included for reference only.\nThis JSON file contains a representation of the data for an order that includes a single item.\n\nQuestion\nYou need to troubleshoot the order workflow.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0051200003.png',
    respuestaCorrecta: 'CD',
    respuestas: [
      'A. Review the API connections.',
      'B. Review the activity log.',
      'C. Review the run history.',
      'D. Review the trigger history.'
    ]
  },
  {
    id: '816499',
    topic: 'Topic 22',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient applications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application consists of five modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to support label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\n\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reflect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\n\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\n\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service (AKS) cluster.\n\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted on Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\n\nArchitecture -\n\n\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workflow fails to run upon initial deployment to Azure.\n\nOrder.json -\nRelevant portions of the app files are shown below. Line numbers are included for reference only.\nThis JSON file contains a representation of the data for an order that includes a single item.\n\nQuestion\nHOTSPOT -\nYou need to update the order workflow to address the issue when calling the Printer API App.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0051200003.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0052000001.jpg',
    respuestas: []
  },
  {
    id: '816500',
    topic: 'Topic 23',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply chain operations and would like to leverage serverless computing where possible.\n\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workflows:\nOcean Transport `\" This workflow gathers and validates container information including container contents and arrival notices at various shipping ports.\nInland Transport `\" This workflow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\n\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\n\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\n\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure Site Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host BizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\n\n\nRequirements -\n\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workflows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a fixed costing model.\nMaintain on-premises connectivity to support legacy applications and final BizTalk migrations.\n\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\n\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\n\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\n\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\n\nIssues -\n\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must enable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\n\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nDRAG DROP -\nYou need to support the message processing for the ocean transport workflow.\nWhich four actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0052300001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0052600001.png',
    respuestas: []
  },
  {
    id: '816501',
    topic: 'Topic 23',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nWide World Importers is moving all their datacenters to Azure. The company has developed several applications and services to support supply chain operations and would like to leverage serverless computing where possible.\n\nCurrent environment -\nWindows Server 2016 virtual machine\nThis virtual machine (VM) runs BizTalk Server 2016. The VM runs the following workflows:\nOcean Transport `\" This workflow gathers and validates container information including container contents and arrival notices at various shipping ports.\nInland Transport `\" This workflow gathers and validates trucking information including fuel usage, number of stops, and routes.\nThe VM supports the following REST API calls:\nContainer API `\" This API provides container information including weight, contents, and other attributes.\nLocation API `\" This API provides location information regarding shipping ports of call and trucking stops.\nShipping REST API `\" This API provides shipping information for use and display on the shipping website.\n\nShipping Data -\nThe application uses MongoDB JSON document storage database for all container and transport information.\n\nShipping Web Site -\nThe site displays shipping container tracking information and container contents. The site is located at http://shipping.wideworldimporters.com/\n\nProposed solution -\nThe on-premises shipping application must be moved to Azure. The VM has been migrated to a new Standard_D16s_v3 Azure VM by using Azure Site Recovery and must remain running in Azure to complete the BizTalk component migrations. You create a Standard_D16s_v3 Azure VM to host BizTalk Server. The Azure architecture diagram for the proposed solution is shown below:\n\n\nRequirements -\n\nShipping Logic app -\nThe Shipping Logic app must meet the following requirements:\nSupport the ocean transport and inland transport workflows by using a Logic App.\nSupport industry-standard protocol X12 message format for various messages including vessel content details and arrival notices.\nSecure resources to the corporate VNet and use dedicated storage resources with a fixed costing model.\nMaintain on-premises connectivity to support legacy applications and final BizTalk migrations.\n\nShipping Function app -\nImplement secure function endpoints by using app-level security and include Azure Active Directory (Azure AD).\n\nREST APIs -\nThe REST API's that support the solution must meet the following requirements:\nSecure resources to the corporate VNet.\nAllow deployment to a testing location within Azure while not incurring additional costs.\nAutomatically scale to double capacity during peak shipping times while not causing application downtime.\nMinimize costs when selecting an Azure payment model.\n\nShipping data -\nData migration from on-premises to Azure must minimize costs and downtime.\n\nShipping website -\nUse Azure Content Delivery Network (CDN) and ensure maximum performance for dynamic content while minimizing latency and costs.\n\nIssues -\n\nWindows Server 2016 VM -\nThe VM shows high network latency, jitter, and high CPU utilization. The VM is critical and has not been backed up in the past. The VM must enable a quick restore from a 7-day snapshot to include in-place restore of disks in case of failure.\n\nShipping website and REST APIs -\nThe following error message displays while you are testing the website:\nFailed to load http://test-shippingapi.wideworldimporters.com/: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://test.wideworldimporters.com/' is therefore not allowed access.\nQuestion\nYou need to support the requirements for the Shipping Logic App.\nWhat should you use?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0052300001.jpg',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Azure Active Directory Application Proxy',
      'B. Site-to-Site (S2S) VPN connection',
      'C. On-premises Data Gateway',
      'D. Point-to-Site (P2S) VPN connection'
    ]
  },
  {
    id: '816502',
    topic: 'Topic 24',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nHOTSPOT -\nYou need to configure the integration for Azure Service Bus and Azure Event Grid.\nHow should you complete the CLI statement? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0052900001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0053300001.png',
    respuestas: []
  },
  {
    id: '816503',
    topic: 'Topic 24',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nYou need to ensure that all messages from Azure Event Grid are processed.\nWhat should you use?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0052900001.png',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Azure Event Grid topic',
      'B. Azure Service Bus topic',
      'C. Azure Service Bus queue',
      'D. Azure Storage queue',
      'E. Azure Logic App custom connector'
    ]
  },
  {
    id: '816504',
    topic: 'Topic 25',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal services, external services, and applications. The application will also provide a shared library for common functionality.\n\nRequirements -\n\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application reacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID field in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\n\nPolicies -\n\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log files should be saved to a container named logdrop. Logs must remain in the container for 15 days.\n\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign outs must be processed as quickly as possible.\n\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib library must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\n\nOther -\n\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The model is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\n\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\n\nIssues -\n\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\n\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\n\nNotification latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\n\nApp code -\n\nEventGridController.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\n\nLoginEvent.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\nQuestion\nDRAG DROP -\nYou need to add code at line EG15 in EventGridController.cs to ensure that the Log policy applies to all services.\nHow should you complete the code? To answer, drag the appropriate code segments to the correct locations. Each code segment may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.\nNOTE: Each correct selection is worth one point.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0053800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0054000002.png',
    respuestas: []
  },
  {
    id: '816505',
    topic: 'Topic 25',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal services, external services, and applications. The application will also provide a shared library for common functionality.\n\nRequirements -\n\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application reacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID field in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\n\nPolicies -\n\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log files should be saved to a container named logdrop. Logs must remain in the container for 15 days.\n\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign outs must be processed as quickly as possible.\n\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib library must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\n\nOther -\n\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The model is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\n\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\n\nIssues -\n\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\n\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\n\nNotification latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\n\nApp code -\n\nEventGridController.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\n\nLoginEvent.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\nQuestion\nHOTSPOT -\nYou need to insert code at line LE03 of LoginEvent.cs to ensure that all authentication events are processed correctly.\nHow should you complete the code? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0053800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0054300001.png',
    respuestas: []
  },
  {
    id: '816506',
    topic: 'Topic 25',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal services, external services, and applications. The application will also provide a shared library for common functionality.\n\nRequirements -\n\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application reacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID field in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\n\nPolicies -\n\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log files should be saved to a container named logdrop. Logs must remain in the container for 15 days.\n\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign outs must be processed as quickly as possible.\n\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib library must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\n\nOther -\n\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The model is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\n\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\n\nIssues -\n\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\n\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\n\nNotification latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\n\nApp code -\n\nEventGridController.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\n\nLoginEvent.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\nQuestion\nHOTSPOT -\nYou need to implement the Log policy.\nHow should you complete the EnsureLogging method in EventGridController.cs? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0053800001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0054600001.png',
    respuestas: []
  },
  {
    id: '816507',
    topic: 'Topic 26',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nYou are a developer for Proseware, Inc. You are developing an application that applies a set of governance policies for Proseware's internal services, external services, and applications. The application will also provide a shared library for common functionality.\n\nRequirements -\n\nPolicy service -\nYou develop and deploy a stateful ASP.NET Core 2.1 web application named Policy service to an Azure App Service Web App. The application reacts to events from Azure Event Grid and performs policy actions based on those events.\nThe application must include the Event Grid Event ID field in all Application Insights telemetry.\nPolicy service must use Application Insights to automatically scale with the number of policy actions that it is performing.\n\nPolicies -\n\nLog policy -\nAll Azure App Service Web Apps must write logs to Azure Blob storage. All log files should be saved to a container named logdrop. Logs must remain in the container for 15 days.\n\nAuthentication events -\nAuthentication events are used to monitor users signing in and signing out. All authentication events must be processed by Policy service. Sign outs must be processed as quickly as possible.\n\nPolicyLib -\nYou have a shared library named PolicyLib that contains functionality common to all ASP.NET Core web services and applications. The PolicyLib library must:\nExclude non-user actions from Application Insights telemetry.\nProvide methods that allow a web service to scale itself.\nEnsure that scaling actions do not disrupt application usage.\n\nOther -\n\nAnomaly detection service -\nYou have an anomaly detection service that analyzes log information for anomalies. It is implemented as an Azure Machine Learning model. The model is deployed as a web service. If an anomaly is detected, an Azure Function that emails administrators is called by using an HTTP WebHook.\n\nHealth monitoring -\nAll web applications and services have health monitoring at the /health service endpoint.\n\nIssues -\n\nPolicy loss -\nWhen you deploy Policy service, policies may not be applied if they were in the process of being applied during the deployment.\n\nPerformance issue -\nWhen under heavy load, the anomaly detection service undergoes slowdowns and rejects connections.\n\nNotification latency -\nUsers report that anomaly detection emails can sometimes arrive several minutes after an anomaly is detected.\n\nApp code -\n\nEventGridController.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\n\nLoginEvent.cs -\nRelevant portions of the app files are shown below. Line numbers are included for reference only and include a two-character prefix that denotes the specific file to which they belong.\n\nQuestion\nYou need to resolve a notification latency issue.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0005700001.png',
    respuestaCorrecta: 'AB',
    respuestas: [
      'A. Set Always On to true.',
      'B. Ensure that the Azure Function is using an App Service plan.',
      'C. Set Always On to false.',
      'D. Ensure that the Azure Function is set to use a consumption plan.'
    ]
  },
  {
    id: '816508',
    topic: 'Topic 27',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\nMessages are sent to ContentUploadService.\nContent is processed by ContentAnalysisService.\nAfter processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nHOTSPOT -\nYou need to ensure that validation testing is triggered per the requirements.\nHow should you complete the code segment? To answer, select the appropriate values in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0006200001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0006500001.jpg',
    respuestas: []
  },
  {
    id: '816509',
    topic: 'Topic 27',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\nMessages are sent to ContentUploadService.\nContent is processed by ContentAnalysisService.\nAfter processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nYou need to deploy the CheckUserContent Azure Function. The solution must meet the security and cost requirements.\nWhich hosting model should you use?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0006200001.jpg',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Premium plan',
      'B. App Service plan',
      'C. Consumption plan'
    ]
  },
  {
    id: '816510',
    topic: 'Topic 28',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient applications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application consists of five modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to support label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\n\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reflect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\n\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\n\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service (AKS) cluster.\n\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted on Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\n\nArchitecture -\n\n\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workflow fails to run upon initial deployment to Azure.\n\nOrder.json -\nRelevant portions of the app files are shown below. Line numbers are included for reference only.\nThis JSON file contains a representation of the data for an order that includes a single item.\n\nOrder.json -\n\nQuestion\nDRAG DROP -\nYou need to deploy a new version of the LabelMaker application to ACR.\nWhich three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.\nSelect and Place:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0006800003.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0007400001.jpg',
    respuestas: []
  },
  {
    id: '816511',
    topic: 'Topic 28',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nLabelMaker app -\nCoho Winery produces, bottles, and distributes a variety of wines globally. You are a developer implementing highly scalable and resilient applications to support online order processing by using Azure solutions.\nCoho Winery has a LabelMaker application that prints labels for wine bottles. The application sends data to several printers. The application consists of five modules that run independently on virtual machines (VMs). Coho Winery plans to move the application to Azure and continue to support label creation.\nExternal partners send data to the LabelMaker application to include artwork and text for custom label designs.\n\nRequirements. Data -\nYou identify the following requirements for data management and manipulation:\nOrder data is stored as nonrelational JSON and must be queried using SQL.\nChanges to the Order data must reflect immediately across all partitions. All reads to the Order data must fetch the most recent writes.\n\nRequirements. Security -\nYou have the following security requirements:\nUsers of Coho Winery applications must be able to provide access to documents, resources, and applications to external partners.\n\nExternal partners must use their own credentials and authenticate with their organization's identity management solution.\nExternal partner logins must be audited monthly for application use by a user account administrator to maintain company compliance.\nStorage of e-commerce application settings must be maintained in Azure Key Vault.\nE-commerce application sign-ins must be secured by using Azure App Service authentication and Azure Active Directory (AAD).\nConditional access policies must be applied at the application level to protect company content.\nThe LabelMaker application must be secured by using an AAD account that has full access to all namespaces of the Azure Kubernetes Service (AKS) cluster.\n\nRequirements. LabelMaker app -\nAzure Monitor Container Health must be used to monitor the performance of workloads that are deployed to Kubernetes environments and hosted on Azure\nKubernetes Service (AKS).\nYou must use Azure Container Registry to publish images that support the AKS deployment.\n\nArchitecture -\n\n\nIssues -\nCalls to the Printer API App fail periodically due to printer communication timeouts.\nPrinter communication timeouts occur after 10 seconds. The label printer must only receive up to 5 attempts within one minute.\nThe order workflow fails to run upon initial deployment to Azure.\n\nOrder.json -\nRelevant portions of the app files are shown below. Line numbers are included for reference only.\nThis JSON file contains a representation of the data for an order that includes a single item.\n\nOrder.json -\n\nQuestion\nYou need to access data from the user claim object in the e-commerce web app.\nWhat should you do first?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0006800003.png',
    respuestaCorrecta: 'C',
    respuestas: [
      'A. Write custom code to make a Microsoft Graph API call from the e-commerce web app.',
      'B. Assign the Contributor RBAC role to the e-commerce web app by using the Resource Manager create role assignment API.',
      'C. Update the e-commerce web app to read the HTTP request header values.',
      'D. Using the Azure CLI, enable Cross-origin resource sharing (CORS) from the e-commerce checkout API to the e-commerce web app.'
    ]
  },
  {
    id: '816512',
    topic: 'Topic 29',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to implement the retail store location Azure Function.\nHow should you configure the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0007900001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0008100001.png',
    respuestas: []
  },
  {
    id: '816513',
    topic: 'Topic 29',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nHOTSPOT -\nYou need to implement the corporate website.\nHow should you configure the solution? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n',
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0008300001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0008400001.png',
    respuestas: []
  },
  {
    id: '816514',
    topic: 'Topic 30',
    pregunta: 'Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nVanArsdel, Ltd. is a global office supply company. The company is based in Canada and has retail store locations across the world. The company is developing several cloud-based solutions to support their stores, distributors, suppliers, and delivery services.\n\nCurrent environment -\n\nCorporate website -\nThe company provides a public website located at http://www.vanarsdelltd.com. The website consists of a React JavaScript user interface, HTML, CSS, image assets, and several APIs hosted in Azure Functions.\n\nRetail Store Locations -\nThe company supports thousands of store locations globally. Store locations send data every hour to an Azure Blob storage account to support inventory, purchasing and delivery services. Each record includes a location identifier and sales transaction information.\n\nRequirements -\nThe application components must meet the following requirements:\n\nCorporate website -\nSecure the website by using SSL.\nMinimize costs for data storage and hosting.\nImplement native GitHub workflows for continuous integration and continuous deployment (CI/CD).\nDistribute the website content globally for local use.\nImplement monitoring by using Application Insights and availability web tests including SSL certificate validity and custom header value verification.\nThe website must have 99.95 percent uptime.\n\nRetail store locations -\nAzure Functions must process data immediately when data is uploaded to Blob storage. Azure Functions must update Azure Cosmos DB by using native SQL language queries.\nAudit store sale transaction information nightly to validate data, process sales financials, and reconcile inventory.\n\nDelivery services -\nStore service telemetry data in Azure Cosmos DB by using an Azure Function. Data must include an item id, the delivery vehicle license plate, vehicle package capacity, and current vehicle location coordinates.\nStore delivery driver profile information in Azure Active Directory (Azure AD) by using an Azure Function called from the corporate website.\n\nInventory services -\nThe company has contracted a third-party to develop an API for inventory processing that requires access to a specific blob within the retail store storage account for three months to include read-only access to the data.\n\nSecurity -\nAll Azure Functions must centralize management and distribution of configuration data for different environments and geographies, encrypted by using a company-provided RSA-HSM key.\nAuthentication and authorization must use Azure AD and services must use managed identities where possible.\n\nIssues -\n\nRetail Store Locations -\nYou must perform a point-in-time restoration of the retail store location data due to an unexpected and accidental deletion of data.\nAzure Cosmos DB queries from the Azure Function exhibit high Request Unit (RU) usage and contain multiple, complex queries that exhibit high point read latency for large items as the function app is scaling.\nQuestion\nYou need to implement a solution to resolve the retail store location data issue.\nWhich three Azure Blob features should you enable? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n',
    respuestaCorrecta: 'ABD',
    respuestas: [
      'A. Soft delete',
      'B. Change feed',
      'C. Snapshots',
      'D. Versioning',
      'E. Object replication',
      'F. Immutability'
    ]
  },
  {
    id: '816515',
    topic: 'Topic 31',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nYou need to store the user agreements.\nWhere should you store the agreement after it is completed?\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0016800001.jpg',
    respuestaCorrecta: 'B',
    respuestas: [
      'A. Azure Storage queue',
      'B. Azure Event Hub',
      'C. Azure Service Bus topic',
      'D. Azure Event Grid topic'
    ]
  },
  {
    id: '816516',
    topic: 'Topic 31',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nHOTSPOT -\nYou need to implement the bindings for the CheckUserContent function.\nHow should you complete the code segment? To answer, select the appropriate options in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0016800001.jpg',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0017200001.jpg',
    respuestas: []
  },
  {
    id: '816517',
    topic: 'Topic 31',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\n\nOverview -\nYou are a developer for Contoso, Ltd. The company has a social networking website that is developed as a Single Page Application (SPA). The main web application for the social networking website loads user uploaded content from blob storage.\nYou are developing a solution to monitor uploaded data for inappropriate content. The following process occurs when users upload content by using the SPA:\n* Messages are sent to ContentUploadService.\n* Content is processed by ContentAnalysisService.\n* After processing is complete, the content is posted to the social network or a rejection message is posted in its place.\nThe ContentAnalysisService is deployed with Azure Container Instances from a private Azure Container Registry named contosoimages.\nThe solution will use eight CPU cores.\n\nAzure Active Directory -\nContoso, Ltd. uses Azure Active Directory (Azure AD) for both internal and guest accounts.\n\nRequirements -\n\nContentAnalysisService -\nThe company's data science group built ContentAnalysisService which accepts user generated content as a string and returns a probable value for inappropriate content. Any values over a specific threshold must be reviewed by an employee of Contoso, Ltd.\nYou must create an Azure Function named CheckUserContent to perform the content checks.\n\nCosts -\nYou must minimize costs for all Azure services.\n\nManual review -\nTo review content, the user must authenticate to the website portion of the ContentAnalysisService using their Azure AD credentials. The website is built using\nReact and all pages and API endpoints require authentication. In order to review content a user must be part of a ContentReviewer role. All completed reviews must include the reviewer's email address for auditing purposes.\n\nHigh availability -\nAll services must run in multiple regions. The failure of any service in a region must not impact overall application availability.\n\nMonitoring -\nAn alert must be raised if the ContentUploadService uses more than 80 percent of available CPU cores.\n\nSecurity -\nYou have the following security requirements:\nAny web service accessible over the Internet must be protected from cross site scripting attacks.\nAll websites and services must use SSL from a valid root certificate authority.\nAzure Storage access keys must only be stored in memory and must be available only to the service.\nAll Internal services must only be accessible from internal Virtual Networks (VNets).\nAll parts of the system must support inbound and outbound traffic restrictions.\nAll service calls must be authenticated by using Azure AD.\n\nUser agreements -\nWhen a user submits content, they must agree to a user agreement. The agreement allows employees of Contoso, Ltd. to review content, store cookies on user devices, and track user's IP addresses.\nInformation regarding agreements is used by multiple divisions within Contoso, Ltd.\nUser responses must not be lost and must be available to all parties regardless of individual service uptime. The volume of agreements is expected to be in the millions per hour.\n\nValidation testing -\nWhen a new version of the ContentAnalysisService is available the previous seven days of content must be processed with the new version to verify that the new version does not significantly deviate from the old version.\n\nIssues -\nUsers of the ContentUploadService report that they occasionally see HTTP 502 responses on specific pages.\n\nCode -\n\nContentUploadService -\n\n\nApplicationManifest -\n\nQuestion\nYou need to configure the ContentUploadService deployment.\nWhich two actions should you perform? Each correct answer presents part of the solution.\nNOTE: Each correct selection is worth one point.\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0016800001.jpg',
    respuestaCorrecta: 'AC',
    respuestas: [
      'A. Add the following markup to line CS23: type: Private',
      'B. Add the following markup to line CS24: osType: Windows',
      'C. Add the following markup to line CS24: osType: Linux',
      'D. Add the following markup to line CS23: type: Public'
    ]
  },
  {
    id: '816518',
    topic: 'Topic 32',
    pregunta: "Introductory Info\nCase study -\nThis is a case study. Case studies are not timed separately. You can use as much exam time as you would like to complete each case. However, there may be additional case studies and sections on this exam. You must manage your time to ensure that you are able to complete all questions included on this exam in the time provided.\nTo answer the questions included in a case study, you will need to reference information that is provided in the case study. Case studies might contain exhibits and other resources that provide more information about the scenario that is described in the case study. Each question is independent of the other questions in this case study.\nAt the end of this case study, a review screen will appear. This screen allows you to review your answers and to make changes before you move to the next section of the exam. After you begin a new section, you cannot return to this section.\n\nTo start the case study -\nTo display the first question in this case study, click the Next button. Use the buttons in the left pane to explore the content of the case study before you answer the questions. Clicking these buttons displays information such as business requirements, existing environment, and problem statements. When you are ready to answer a question, click the Question button to return to the question.\n\nBackground -\nCity Power & Light company provides electrical infrastructure monitoring solutions for homes and businesses. The company is migrating solutions to Azure.\n\nCurrent environment -\n\nArchitecture overview -\nThe company has a public website located at http://www.cpandl.com/. The site is a single-page web application that runs in Azure App Service on Linux. The website uses files stored in Azure Storage and cached in Azure Content Delivery Network (CDN) to serve static content.\nAPI Management and Azure Function App functions are used to process and store data in Azure Database for PostgreSQL. API Management is used to broker communications to the Azure Function app functions for Logic app integration. Logic apps are used to orchestrate the data processing while Service Bus and\nEvent Grid handle messaging and events.\nThe solution uses Application Insights, Azure Monitor, and Azure Key Vault.\n\nArchitecture diagram -\nThe company has several applications and services that support their business. The company plans to implement serverless computing where possible. The overall architecture is shown below.\n\n\nUser authentication -\nThe following steps detail the user authentication process:\n1. The user selects Sign in in the website.\n2. The browser redirects the user to the Azure Active Directory (Azure AD) sign in page.\n3. The user signs in.\n4. Azure AD redirects the user's session back to the web application. The URL includes an access token.\n5. The web application calls an API and includes the access token in the authentication header. The application ID is sent as the audience ('aud') claim in the access token.\n6. The back-end API validates the access token.\n\nRequirements -\n\nCorporate website -\nCommunications and content must be secured by using SSL.\nCommunications must use HTTPS.\nData must be replicated to a secondary region and three availability zones.\nData storage costs must be minimized.\n\nAzure Database for PostgreSQL -\nThe database connection string is stored in Azure Key Vault with the following attributes:\nAzure Key Vault name: cpandlkeyvault\nSecret name: PostgreSQLConn\nId: 80df3e46ffcd4f1cb187f79905e9a1e8\nThe connection information is updated frequently. The application must always use the latest information to connect to the database.\nAzure Service Bus and Azure Event Grid\nAzure Event Grid must use Azure Service Bus for queue-based load leveling.\nEvents in Azure Event Grid must be routed directly to Service Bus queues for use in buffering.\nEvents from Azure Service Bus and other Azure services must continue to be routed to Azure Event Grid for processing.\n\nSecurity -\nAll SSL certificates and credentials must be stored in Azure Key Vault.\nFile access must restrict access by IP, protocol, and Azure AD rights.\nAll user accounts and processes must receive only those privileges which are essential to perform their intended function.\n\nCompliance -\nAuditing of the file updates and transfers must be enabled to comply with General Data Protection Regulation (GDPR). The file updates must be read-only, stored in the order in which they occurred, include only create, update, delete, and copy operations, and be retained for compliance reasons.\n\nIssues -\n\nCorporate website -\nWhile testing the site, the following error message displays:\nCryptographicException: The system cannot find the file specified.\n\nFunction app -\nYou perform local testing for the RequestUserApproval function. The following error message displays:\n'Timeout value of 00:10:00 exceeded by function: RequestUserApproval'\nThe same error message displays when you test the function in an Azure development environment when you run the following Kusto query:\n\nFunctionAppLogs -\n| where FunctionName = = \"RequestUserApproval\"\n\nLogic app -\nYou test the Logic app in a development environment. The following error message displays:\n'400 Bad Request'\nTroubleshooting of the error shows an HttpTrigger action to call the RequestUserApproval function.\n\nCode -\n\nCorporate website -\nSecurity.cs:\n\n\nFunction app -\nRequestUserApproval.cs:\n\nQuestion\nHOTSPOT -\nYou need to configure the Account Kind, Replication, and Access tier options for the corporate website's Azure Storage account.\nHow should you complete the configuration? To answer, select the appropriate options in the dialog box in the answer area.\nNOTE: Each correct selection is worth one point.\nHot Area:\n\n",
    imgPregunta: 'https://www.examtopics.com/assets/media/exam-media/04273/0017600001.png',
    respuestaCorrecta: '',
    imgRespuesta: 'https://www.examtopics.com/assets/media/exam-media/04273/0018100001.jpg',
    respuestas: []
  }
]
