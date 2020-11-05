(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),b=(n(0),n(129)),l={id:"core-cmd-obd",title:"Obd"},o={unversionedId:"core/commands/core-cmd-obd",id:"core/commands/core-cmd-obd",isDocsHomePage:!1,title:"Obd",description:"obd.battery",source:"@site/docs/core/commands/obd.md",slug:"/core/commands/core-cmd-obd",permalink:"/documentation/docs/core/commands/core-cmd-obd",version:"current",sidebar:"coreSidebar",previous:{title:"Minionutil",permalink:"/documentation/docs/core/commands/core-cmd-minionutil"},next:{title:"Power",permalink:"/documentation/docs/core/commands/core-cmd-power"}},i=[{value:"<code>obd.battery</code>",id:"obdbattery",children:[]},{value:"<code>obd.commands</code>",id:"obdcommands",children:[]},{value:"<code>obd.connection</code>",id:"obdconnection",children:[]},{value:"<code>obd.context</code>",id:"obdcontext",children:[]},{value:"<code>obd.dtc</code>",id:"obddtc",children:[]},{value:"<code>obd.dump</code>",id:"obddump",children:[]},{value:"<code>obd.execute</code>",id:"obdexecute",children:[]},{value:"<code>obd.filter</code>",id:"obdfilter",children:[]},{value:"<code>obd.help</code>",id:"obdhelp",children:[]},{value:"<code>obd.manage</code>",id:"obdmanage",children:[]},{value:"<code>obd.monitor</code>",id:"obdmonitor",children:[]},{value:"<code>obd.play</code>",id:"obdplay",children:[]},{value:"<code>obd.protocol</code>",id:"obdprotocol",children:[]},{value:"<code>obd.query</code>",id:"obdquery",children:[]},{value:"<code>obd.recordings</code>",id:"obdrecordings",children:[]},{value:"<code>obd.send</code>",id:"obdsend",children:[]},{value:"<code>obd.setup</code>",id:"obdsetup",children:[]},{value:"<code>obd.status</code>",id:"obdstatus",children:[]}],c={rightToc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"obdbattery"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.battery")),Object(b.b)("p",null,"Gets current battery voltage"),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdcommands"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.commands")),Object(b.b)("p",null,"Lists all supported OBD commands found for vehicle."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdconnection"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.connection")),Object(b.b)("p",null,"Manages current connection."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"baudrate"))," (int): Changes baudrate used to communicate with interface."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"reset"))," (str): Reboots interface and re-initializes connection. ")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"EXAMPLES")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.connection")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.connection baudrate=1152000")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.connection reset=True"))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdcontext"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.context")),Object(b.b)("p",null,"Gets current context."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obddtc"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.dtc")),Object(b.b)("p",null,"Reads and clears Diagnostics Trouble Codes (DTCs)."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"clear"))," (bool): clear DTC codes")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obddump"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.dump")),Object(b.b)("p",null,"Dumps all messages from bus to screen or file."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"duration"))," (int): How many seconds to record data? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"2")," seconds."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"file"))," (str): Write data to a file with the given name."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"description"))," (str): Additional description to the file."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"protocol"))," (str): ID of specific protocol to be used to receive the data. If none is specifed the current protocol will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"baudrate"))," (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"verify"))," (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"raw_response"))," (bool): Get raw response without any validation nor parsing? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"format_response"))," (bool): Format response messages by separating header and data with a hash sign? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"True"),".")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdexecute"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.execute")),Object(b.b)("p",null,"Executes an AT/ST command."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"cmd"))," (str): Command to execute.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"assert_result"))," (str or list): Validate the response by checking that is matches this specific value."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"reset"))," (str): Reset interface after execution. Valid options are: ",Object(b.b)("inlineCode",{parentName:"li"},"warm"),", ",Object(b.b)("inlineCode",{parentName:"li"},"cold")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"keep_conn"))," (bool): Keep connection to interface after execution or close it permanently? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"True"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"type"))," (str): Specify a name of the type of the result. Default is the given command.")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdfilter"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.filter")),Object(b.b)("p",null,"Manages filters used when monitoring."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"action"))," (str): Action to perform. Available actions are ",Object(b.b)("inlineCode",{parentName:"li"},"list"),", ",Object(b.b)("inlineCode",{parentName:"li"},"add")," and ",Object(b.b)("inlineCode",{parentName:"li"},"clear"),".")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"EXAMPLES")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.filter list")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.filter add type=<pass|block|flow> pattern=7C8 mask=7FF")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.filter clear [type=<pass|block|flow>]"))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdhelp"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.help")),Object(b.b)("p",null,"Shows this help information."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdmanage"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.manage")),Object(b.b)("p",null,"Runtime management of the underlying service instance."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"SUPPORTED COMMANDS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"hook list|call <name> [argument]... [<key>=<value>]...")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"worker list|show|start|pause|resume|kill <name>")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"run <key>=<value>..."))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"EXAMPLES")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.manage hook list")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.manage hook call execute_handler ATRV")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.manage worker list *")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.manage worker show *")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.manage worker start *")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.manage worker pause *")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.manage worker resume *")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.manage worker kill *")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},'obd.manage run handler="query" args="[\\"ELM_VOLTAGE\\"]" converter="battery" returner="cloud"'))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdmonitor"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.monitor")),Object(b.b)("p",null,"Monitors messages on bus until limit or duration is reached."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"wait"))," (bool): Wait for each message/line to read according to the default timeout of the serial connection (default 1 second). Otherwise there will only be waiting on the first line. line/message. Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"limit"))," (int): The maximum number of messages to read. Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"500"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"duration"))," (float): How many seconds to monitor? If not set there is no limitation."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"mode"))," (int): The STN monitor mode. Default is ",Object(b.b)("inlineCode",{parentName:"li"},"0"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"auto_format"))," (bool): Apply automatic formatting of messages? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"filtering"))," (bool): Use filters while monitoring or monitor all messages? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"protocol"))," (str): ID of specific protocol to be used to receive the data. If none is specifed the current protocol will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"baudrate"))," (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"verify"))," (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"type"))," (str): Specify a name of the type of the result. Default is ",Object(b.b)("inlineCode",{parentName:"li"},"raw"),".")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdplay"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.play")),Object(b.b)("p",null,"Plays all messages from a file on the bus."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"file"))," (str): Path to file recorded with the ",Object(b.b)("inlineCode",{parentName:"li"},"obd.dump")," command.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"delay"))," (float): Delay in milliseconds between sending each message. Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"0"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"slice"))," (str): Slice the list of messages before sending on the CAN bus. Based one the divide and conquer algorithm. Multiple slice characters can be specified in continuation of each other.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"t"),": Top half of remaining result."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"b"),": Bottom half of remaining result."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"filter"))," (str): Filter out messages before sending on the CAN bus. Multiple filters can be specified if separated using comma characters.",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"+[id][#][data]"),": Include only messages matching string."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"-[id][#][data]"),": Exclude messages matching string."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"+duplicate"),": Include only messages where duplicates exist."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"-duplicate"),": Exclude messages where duplicates exist."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"+mutate"),": Include only messages where data mutates."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"-mutate"),": Exclude messages where data mutates."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"group"))," (str): How to group the result of sent messages. This only affects the display values returned from this command. Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"id"),".",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"id"),": Group by message ID only."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"msg"),": Group by entire message string."))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"protocol"))," (str): ID of specific protocol to be used to send the data. If none is specifed the current protocol will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"baudrate"))," (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"verify"))," (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"auto_format"))," (bool): Apply automatic formatting of messages? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"test"))," (bool): Run command in test-only? (dry-run) mode. No data will be sent on CAN bus. Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),".")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdprotocol"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.protocol")),Object(b.b)("p",null,"Configures protocol or lists all supported."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"set"))," (str): Change to protocol with given identifier."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"baudrate"))," (int): Use custom protocol baudrate. "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"verify"))," (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),".")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"EXAMPLES")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.protocol")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.protocol set=auto")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.protocol set=6")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.protocol set=53 baudrate=250000"))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdquery"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.query")),Object(b.b)("p",null,"Queries a given OBD command. To see supported OBD commands for your vehicle run: ",Object(b.b)("inlineCode",{parentName:"p"},"obd.commands")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"name"))," (str): Name of the command.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"mode"))," (str): Service section of the PID."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"pid"))," (str): Code section of the PID."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"header"))," (str): Identifer of message to send. If none is specifed the default OBD header will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"bytes"))," (int): Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"0"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"decoder"))," (str): Specific decoder to be used to process the response."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"formula"))," (str): Formula written in Python to convert the response."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"unit"))," (str): Unit of the result."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"protocol"))," (str): ID of specific protocol to be used to receive the data. If none is specifed the current protocol will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"baudrate"))," (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"verify"))," (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"force"))," (bool): Force query of unknown command. Default is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),".")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"EXAMPLES")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.query RPM")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.query SPEED")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.query FUEL_LEVEL force=True")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.query custom_intake_temp_raw mode=01 pid=0F")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"obd.query custom_intake_temp mode=01 pid=0F decoder=temp"))),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdrecordings"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.recordings")),Object(b.b)("p",null,"Lists all dumped recordings available on disk."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdsend"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.send")),Object(b.b)("p",null,"Sends a message on bus."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"msg"))," (str): Message to send.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS, GENERAL")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"header"))," (str): Identifer of message to send. If none is specifed the default header will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"auto_format"))," (bool): Apply automatic formatting of messages? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"expect_response"))," (bool): Wait for response after sending? Avoid waiting for timeout by specifying the exact the number of frames expected. Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"raw_response"))," (bool): Get raw response without any validation nor parsing? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"echo"))," (bool): Include the request message in the response? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"protocol"))," (str): ID of specific protocol to be used to receive the data. If none is specifed the current protocol will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"baudrate"))," (int): Specific protocol baudrate to be used. If none is specifed the current baudrate will be used."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"verify"))," (bool): Verify that OBD-II communication is possible with the desired protocol? Default value is ",Object(b.b)("inlineCode",{parentName:"li"},"False"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"output"))," (str): What data type should the output be returned in? Default is a ",Object(b.b)("inlineCode",{parentName:"li"},"list"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"type"))," (str): Specify a name of the type of the result. Default is ",Object(b.b)("inlineCode",{parentName:"li"},"raw"),".")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS, CAN SPECIFIC")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"can_extended_address"))," (str): Use CAN extended address."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"can_flow_control_clear"))," (bool): Clear all CAN flow control filters and ID pairs before adding any new ones."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"can_flow_control_filter"))," (str): Ensure CAN flow control filter is added. Value must consist of ",Object(b.b)("inlineCode",{parentName:"li"},"<pattern>,<mask>"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"can_flow_control_id_pair"))," (str): Ensure CAN flow control ID pair is added. Value must consist of ",Object(b.b)("inlineCode",{parentName:"li"},"<transmitter ID>,<receiver ID>"),".")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdsetup"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.setup")),Object(b.b)("p",null,"Setup advanced runtime settings."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"OPTIONAL ARGUMENTS")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"can_extended_address"))," (str): Use CAN extended address."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"can_flow_control_clear"))," (bool): Clear all CAN flow control filters and ID pairs before adding any new ones."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"can_flow_control_filter"))," (str): Ensure CAN flow control filter is added. Value must consist of ",Object(b.b)("inlineCode",{parentName:"li"},"<pattern>,<mask>"),"."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},Object(b.b)("inlineCode",{parentName:"strong"},"can_flow_control_id_pair"))," (str): Ensure CAN flow control ID pair is added. Value must consist of ",Object(b.b)("inlineCode",{parentName:"li"},"<transmitter ID>,<receiver ID>"),".")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"obdstatus"},Object(b.b)("inlineCode",{parentName:"h2"},"obd.status")),Object(b.b)("p",null,"Gets current status information."))}s.isMDXComponent=!0},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,u=d["".concat(l,".").concat(m)]||d[m]||p[m]||b;return n?r.a.createElement(u,o(o({ref:t},c),{},{components:n})):r.a.createElement(u,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<b;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);