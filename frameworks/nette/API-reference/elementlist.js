
var ApiGen = ApiGen || {};
ApiGen.elements = [["c","ArrayAccess"],["c","ArrayIterator"],["c","CachingIterator"],["f","callback()"],["c","Closure"],["c","Countable"],["c","DateTime"],["f","dump()"],["c","ErrorException"],["c","Exception"],["c","FilterIterator"],["c","InvalidArgumentException"],["c","Iterator"],["c","IteratorAggregate"],["c","IteratorIterator"],["c","LogicException"],["c","Nette\\Application\\AbortException"],["c","Nette\\Application\\Application"],["c","Nette\\Application\\ApplicationException"],["c","Nette\\Application\\BadRequestException"],["c","Nette\\Application\\Diagnostics\\RoutingPanel"],["c","Nette\\Application\\ForbiddenRequestException"],["c","Nette\\Application\\InvalidPresenterException"],["c","Nette\\Application\\IPresenter"],["c","Nette\\Application\\IPresenterFactory"],["c","Nette\\Application\\IResponse"],["c","Nette\\Application\\IRouter"],["c","Nette\\Application\\PresenterFactory"],["c","Nette\\Application\\Request"],["c","Nette\\Application\\Responses\\FileResponse"],["c","Nette\\Application\\Responses\\ForwardResponse"],["c","Nette\\Application\\Responses\\JsonResponse"],["c","Nette\\Application\\Responses\\RedirectResponse"],["c","Nette\\Application\\Responses\\TextResponse"],["c","Nette\\Application\\Routers\\CliRouter"],["c","Nette\\Application\\Routers\\Route"],["c","Nette\\Application\\Routers\\RouteList"],["c","Nette\\Application\\Routers\\SimpleRouter"],["c","Nette\\Application\\UI\\BadSignalException"],["c","Nette\\Application\\UI\\Control"],["c","Nette\\Application\\UI\\Form"],["c","Nette\\Application\\UI\\InvalidLinkException"],["c","Nette\\Application\\UI\\IRenderable"],["c","Nette\\Application\\UI\\ISignalReceiver"],["c","Nette\\Application\\UI\\IStatePersistent"],["c","Nette\\Application\\UI\\Multiplier"],["c","Nette\\Application\\UI\\Presenter"],["c","Nette\\Application\\UI\\PresenterComponent"],["c","Nette\\ArgumentOutOfRangeException"],["c","Nette\\ArrayHash"],["c","Nette\\ArrayList"],["c","Nette\\Caching\\Cache"],["c","Nette\\Caching\\IStorage"],["c","Nette\\Caching\\OutputHelper"],["c","Nette\\Caching\\Storages\\DevNullStorage"],["c","Nette\\Caching\\Storages\\FileJournal"],["c","Nette\\Caching\\Storages\\FileStorage"],["c","Nette\\Caching\\Storages\\IJournal"],["c","Nette\\Caching\\Storages\\MemcachedStorage"],["c","Nette\\Caching\\Storages\\MemoryStorage"],["c","Nette\\Caching\\Storages\\PhpFileStorage"],["c","Nette\\Callback"],["c","Nette\\ComponentModel\\Component"],["c","Nette\\ComponentModel\\Container"],["c","Nette\\ComponentModel\\IComponent"],["c","Nette\\ComponentModel\\IContainer"],["c","Nette\\Config\\Adapters\\IniAdapter"],["c","Nette\\Config\\Adapters\\NeonAdapter"],["c","Nette\\Config\\Adapters\\PhpAdapter"],["c","Nette\\Config\\Compiler"],["c","Nette\\Config\\CompilerExtension"],["c","Nette\\Config\\Configurator"],["c","Nette\\Config\\Extensions\\ConstantsExtension"],["c","Nette\\Config\\Extensions\\NetteExtension"],["c","Nette\\Config\\Extensions\\PhpExtension"],["c","Nette\\Config\\Helpers"],["c","Nette\\Config\\IAdapter"],["c","Nette\\Config\\Loader"],["c","Nette\\Database\\Connection"],["c","Nette\\Database\\Diagnostics\\ConnectionPanel"],["c","Nette\\Database\\Drivers\\MsSqlDriver"],["c","Nette\\Database\\Drivers\\MySqlDriver"],["c","Nette\\Database\\Drivers\\OciDriver"],["c","Nette\\Database\\Drivers\\OdbcDriver"],["c","Nette\\Database\\Drivers\\PgSqlDriver"],["c","Nette\\Database\\Drivers\\Sqlite2Driver"],["c","Nette\\Database\\Drivers\\SqliteDriver"],["c","Nette\\Database\\Helpers"],["c","Nette\\Database\\IReflection"],["c","Nette\\Database\\ISupplementalDriver"],["c","Nette\\Database\\Reflection\\ConventionalReflection"],["c","Nette\\Database\\Reflection\\DiscoveredReflection"],["c","Nette\\Database\\Row"],["c","Nette\\Database\\SqlLiteral"],["c","Nette\\Database\\SqlPreprocessor"],["c","Nette\\Database\\Statement"],["c","Nette\\Database\\Table\\ActiveRow"],["c","Nette\\Database\\Table\\GroupedSelection"],["c","Nette\\Database\\Table\\Selection"],["c","Nette\\Database\\Table\\SqlBuilder"],["c","Nette\\DateTime"],["c","Nette\\DeprecatedException"],["c","Nette\\DI\\Container"],["c","Nette\\DI\\ContainerBuilder"],["c","Nette\\DI\\Diagnostics\\ContainerPanel"],["c","Nette\\DI\\Helpers"],["c","Nette\\DI\\MissingServiceException"],["c","Nette\\DI\\ServiceCreationException"],["c","Nette\\DI\\ServiceDefinition"],["c","Nette\\DI\\Statement"],["c","Nette\\Diagnostics\\Bar"],["c","Nette\\Diagnostics\\BlueScreen"],["c","Nette\\Diagnostics\\Debugger"],["c","Nette\\Diagnostics\\FireLogger"],["c","Nette\\Diagnostics\\Helpers"],["c","Nette\\Diagnostics\\IBarPanel"],["c","Nette\\Diagnostics\\Logger"],["c","Nette\\DirectoryNotFoundException"],["c","Nette\\FatalErrorException"],["c","Nette\\FileNotFoundException"],["c","Nette\\Forms\\Container"],["c","Nette\\Forms\\ControlGroup"],["c","Nette\\Forms\\Controls\\BaseControl"],["c","Nette\\Forms\\Controls\\Button"],["c","Nette\\Forms\\Controls\\Checkbox"],["c","Nette\\Forms\\Controls\\HiddenField"],["c","Nette\\Forms\\Controls\\ImageButton"],["c","Nette\\Forms\\Controls\\MultiSelectBox"],["c","Nette\\Forms\\Controls\\RadioList"],["c","Nette\\Forms\\Controls\\SelectBox"],["c","Nette\\Forms\\Controls\\SubmitButton"],["c","Nette\\Forms\\Controls\\TextArea"],["c","Nette\\Forms\\Controls\\TextBase"],["c","Nette\\Forms\\Controls\\TextInput"],["c","Nette\\Forms\\Controls\\UploadControl"],["c","Nette\\Forms\\Form"],["c","Nette\\Forms\\IControl"],["c","Nette\\Forms\\IFormRenderer"],["c","Nette\\Forms\\ISubmitterControl"],["c","Nette\\Forms\\Rendering\\DefaultFormRenderer"],["c","Nette\\Forms\\Rule"],["c","Nette\\Forms\\Rules"],["c","Nette\\Framework"],["c","Nette\\FreezableObject"],["c","Nette\\Http\\Context"],["c","Nette\\Http\\FileUpload"],["c","Nette\\Http\\IRequest"],["c","Nette\\Http\\IResponse"],["c","Nette\\Http\\ISessionStorage"],["c","Nette\\Http\\Request"],["c","Nette\\Http\\RequestFactory"],["c","Nette\\Http\\Response"],["c","Nette\\Http\\Session"],["c","Nette\\Http\\SessionSection"],["c","Nette\\Http\\Url"],["c","Nette\\Http\\UrlScript"],["c","Nette\\Http\\UserStorage"],["c","Nette\\IFreezable"],["c","Nette\\Image"],["c","Nette\\InvalidArgumentException"],["c","Nette\\InvalidStateException"],["c","Nette\\IOException"],["c","Nette\\Iterators\\CachingIterator"],["c","Nette\\Iterators\\Filter"],["c","Nette\\Iterators\\InstanceFilter"],["c","Nette\\Iterators\\Mapper"],["c","Nette\\Iterators\\RecursiveFilter"],["c","Nette\\Iterators\\Recursor"],["c","Nette\\Latte\\CompileException"],["c","Nette\\Latte\\Compiler"],["c","Nette\\Latte\\Engine"],["c","Nette\\Latte\\HtmlNode"],["c","Nette\\Latte\\IMacro"],["c","Nette\\Latte\\MacroNode"],["c","Nette\\Latte\\Macros\\CacheMacro"],["c","Nette\\Latte\\Macros\\CoreMacros"],["c","Nette\\Latte\\Macros\\FormMacros"],["c","Nette\\Latte\\Macros\\MacroSet"],["c","Nette\\Latte\\Macros\\UIMacros"],["c","Nette\\Latte\\MacroTokenizer"],["c","Nette\\Latte\\Parser"],["c","Nette\\Latte\\PhpWriter"],["c","Nette\\Latte\\Token"],["c","Nette\\Loaders\\AutoLoader"],["c","Nette\\Loaders\\NetteLoader"],["c","Nette\\Loaders\\RobotLoader"],["c","Nette\\Localization\\ITranslator"],["c","Nette\\Mail\\IMailer"],["c","Nette\\Mail\\Message"],["c","Nette\\Mail\\MimePart"],["c","Nette\\Mail\\SendmailMailer"],["c","Nette\\Mail\\SmtpException"],["c","Nette\\Mail\\SmtpMailer"],["c","Nette\\MemberAccessException"],["c","Nette\\NotImplementedException"],["c","Nette\\NotSupportedException"],["c","Nette\\Object"],["c","Nette\\ObjectMixin"],["c","Nette\\OutOfRangeException"],["c","Nette\\Reflection\\Annotation"],["c","Nette\\Reflection\\AnnotationsParser"],["c","Nette\\Reflection\\ClassType"],["c","Nette\\Reflection\\Extension"],["c","Nette\\Reflection\\GlobalFunction"],["c","Nette\\Reflection\\IAnnotation"],["c","Nette\\Reflection\\Method"],["c","Nette\\Reflection\\Parameter"],["c","Nette\\Reflection\\Property"],["c","Nette\\Security\\AuthenticationException"],["c","Nette\\Security\\Diagnostics\\UserPanel"],["c","Nette\\Security\\IAuthenticator"],["c","Nette\\Security\\IAuthorizator"],["c","Nette\\Security\\Identity"],["c","Nette\\Security\\IIdentity"],["c","Nette\\Security\\IResource"],["c","Nette\\Security\\IRole"],["c","Nette\\Security\\IUserStorage"],["c","Nette\\Security\\Permission"],["c","Nette\\Security\\SimpleAuthenticator"],["c","Nette\\Security\\User"],["c","Nette\\StaticClassException"],["c","Nette\\Templating\\FileTemplate"],["c","Nette\\Templating\\FilterException"],["c","Nette\\Templating\\Helpers"],["c","Nette\\Templating\\IFileTemplate"],["c","Nette\\Templating\\ITemplate"],["c","Nette\\Templating\\Template"],["c","Nette\\UnexpectedValueException"],["c","Nette\\UnknownImageFileException"],["c","Nette\\Utils\\Arrays"],["c","Nette\\Utils\\AssertionException"],["c","Nette\\Utils\\Finder"],["c","Nette\\Utils\\Html"],["c","Nette\\Utils\\Json"],["c","Nette\\Utils\\JsonException"],["c","Nette\\Utils\\LimitedScope"],["c","Nette\\Utils\\MimeTypeDetector"],["c","Nette\\Utils\\Neon"],["c","Nette\\Utils\\NeonEntity"],["c","Nette\\Utils\\NeonException"],["c","Nette\\Utils\\Paginator"],["c","Nette\\Utils\\PhpGenerator\\ClassType"],["c","Nette\\Utils\\PhpGenerator\\Helpers"],["c","Nette\\Utils\\PhpGenerator\\Method"],["c","Nette\\Utils\\PhpGenerator\\Parameter"],["c","Nette\\Utils\\PhpGenerator\\PhpLiteral"],["c","Nette\\Utils\\PhpGenerator\\Property"],["c","Nette\\Utils\\RegexpException"],["c","Nette\\Utils\\Strings"],["c","Nette\\Utils\\Tokenizer"],["c","Nette\\Utils\\TokenizerException"],["c","Nette\\Utils\\Validators"],["c","NetteModule\\MicroPresenter"],["c","OuterIterator"],["c","OutOfRangeException"],["c","PDO"],["c","PDOStatement"],["c","RecursiveArrayIterator"],["c","RecursiveIterator"],["c","ReflectionClass"],["c","ReflectionExtension"],["c","ReflectionFunction"],["c","ReflectionFunctionAbstract"],["c","ReflectionMethod"],["c","ReflectionParameter"],["c","ReflectionProperty"],["c","Reflector"],["c","RuntimeException"],["c","SeekableIterator"],["c","Serializable"],["c","SplObjectStorage"],["c","stdClass"],["c","Traversable"],["c","UnexpectedValueException"]];