export default {
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
		'10000'	: '系统异常,请稍后再试',		// UNTREATED_ERROR
		'10001'	: '缺少关键字段',		// KEY_FIELDS_MISSING_OR_EMPTY
		'10002'	: '密码解析错误',		// USER_PASSWORD_DECODE_ERROR
		'10003'	: '密码结构错误',		// USER_PASSWORD_STRUCT_ERROR
		'10004'	: '邮箱用户名不存在',		// USER_EMAIL_NOT_REGISTER_ERROR
		'10005'	: '用户尚未注册',		// USER_NOT_REGISTER_ERROR
		'10006'	: '用户密码错误',		// USER_PASSWORD_ERROR
		'10007'	: '用户账户关系不存在',		// USER_ACCOUNT_RELATION_NOT_FOUND
		'10008'	: '异常码为空',		// EXCEPTION_CODE_MISSING
		'11000'	: '认证来源refer未允许',		// AUTH_REFER_ERROR
		'11001'	: '认证成功跳转URL错误',		// AUTH_SUCCESS_URI_ERROR
		'11002'	: '认证获取认证码失败',		// AUTH_GET_AUTH_CODE_ERROR
		'11003'	: '认证获取认证码返回错误',		// AUTH_GET_AUTH_CODE_RESULT_ERROR
		'11004'	: '访问认证码已过期, 请重新登录',		// ACCESS_TOKEN_EXPIRED
		'21001'	: '此邮箱已注册，请更换或尝试登录',		// USER_EMAIL_HAS_BEEN_REGISTERED
		'21002'	: '用户密码传输错误，请重试',		// USER_PASSORD_DECODE_ERROR
		'21003'	: '用户名或密码错误',		// USER_EMIAL_NOT_EXISTS
		'21004'	: '用户名或密码错误',		// USER_PASSORD_ERROR
		'21005'	: '登录状态失效，请重新登录……',		// USER_LOGIN_STATE_EXPIRE
		'21006'	: '登录状态失效，请重新登录……',		// USER_LOGIN_STATE_INVALID
		'21007'	: '用户名或密码错误',		// USER_NOT_REGISTER
		'21008'	: '用户创建失败，请稍后再试',		// USER_CREATE_FAILED
		'21009'	: '用户创建失败，请稍后再试',		// USER_UPDATE_FAILED
		'21010'	: '用户ID为空',		// USER_ID_EMPTY
		'21011'	: '不存在此用户',		// USER_NOT_FOUND
		'21012'	: '用户参数错误，请稍后再试',		// USER_FIELD_ERROR
		'21013'	: '用户登录的账号未通过审核',		// USER_LOGIN_APPROVAL_STATUS_NOT_NORMAL
		'21014'	: '用户登录的验证码错误',		// USER_CAPTCHA_ERROR
		'21015'	: '认证码获取失败',		// AUTHORIZE_CODE_RETURN_ERROR_CODE
		'21016'	: '认证码获取返回错误',		// AUTHORIZE_CODE_RETURN_ERROR_RESULT
		'21017'	: '用户登录类型错误',		// USER_LOGIN_TYPE_ERROR
		'21018'	: '用户已经被删除',		// USER_STATUS_DELETE
		'50000'	: '参数错误',		// PARAM_ERROR
		'50001'	: '参数类型错误',		// PARAM_TYPE_ERROR
		'50002'	: '参数值错误',		// PARAM_VALUE_ERROR
		'50003'	: '自定义错误',		// CUSTOMIZE_ERROR
		'50004'	: '资源数据不存在',		// RESOURCE_NOT_FOUND
		'50010'	: '参数值太长',		// PARAM_STRING_LENGTH_TOO_LONG
		'50011'	: '参数值太短',		// PARAM_STRING_LENGTH_TOO_SHORT
		'50020'	: '参数值超出范围',		// PARAM_INT_OUT_OF_RANGE
		'50030'	: '参数字段缺失',		// PARAM_FIELD_MISSING
		'50031'	: '参数结构错误',		// PARAM_STRUCT_ERROR
		'50040'	: '系统RPC调用请求失败',		// RPC_REQUEST_FAILD
		'50041'	: '系统RPC返回数据解析失败',		// RPC_RESPONSE_DATA_PARSE_ERROR
		'50042'	: '系统RPC返回数据结构错误',		// RPC_RESPONSE_STRUCT_ERROR
		'50050'	: '权限不足，请联系系统管理员',		// PERMISSION_MISSING
		'50101'	: '数据字段异常，请联系管理员',		// DB_FIELDS_ERROR
		'50102'	: '幂等异常，请联系管理员',		// DB_IDEMPOTENT_ID_CONFLICT
		'50103'	: '存储系统内部错误，请联系管理员',		// DB_SYSTEM_ERROR
		'50104'	: '存储系统连接异常，请联系管理员',		// DB_CONNECTION_ERROR
		'50200'	: '系统服务异常，请联系管理员',		// SERVICE_ERROR
		'50201'	: '系统服务异常，请联系管理员',		// SERVICE_FIELD_ERROR
		'50202'	: '系统服务异常，请联系管理员',		// SERVICE_MUTATE_ERROR
		'50203'	: '系统服务异常，请联系管理员',		// SERVICE_QUERY_ERROR
		'50204'	: '系统服务异常，请联系管理员',		// SERVICE_PARAM_ERROR
		'50301'	: '请求部分完成',		// INCOMPLETE_SUCCESS
		'50302'	: '请求全部失败',		// REQUEST_ALL_FAILURE
		'50401'	: '删除记录失败',		// DELETE_FAILURE
		'50501'	: '第三方平台登录过期',		// THIRDPARTY_LOGIN_EXPIRE
    '11100'	: '内容填写有误',		// ADVERTISER_FIELD_ERROR
		'11101'	: '参数错误，账户ID为空',		// ADVERTISER_ID_EMTPY
		'11102'	: '不存在此广告主',		// ADVERTISER_DAILY_BUDGET_TYPE_ERROR
		'11103'	: '日限额最低可设置100元',		// ADVERTISER_DAILY_BUDGET_OUT_OF_RANGE
		'11104'	: '广告主ID错误',		// ADVERTISER_ID_PARAMETER_ERROR
		'11200'	: '不存在此广告主',		// ADVERTISER_NOT_FOUND
		'11201'	: '广告主已删除',		// ADVERTISER_STATUS_DELETE
		'12001'	: '推广计划名称已经存在，请修改',		// CAMPAIGN_NAME_EXISTS
		'12002'	: '推广计划创建失败，请稍后再试',		// CAMPAIGN_CREATE_FAILED
		'12003'	: '推广计划修改失败，请稍后再试',		// CAMPAIGN_UPDATE_FAILED
		'12100'	: '推广计划内容填写有误',		// CAMPAIGN_FIELD_ERROR
		'12101'	: '投放网络参数结构错误',		// CAMPAIGN_ADEXCHANGE_TYPES_STRUCT_ERROR
		'12102'	: '日限额设置出错',		// CAMPAIGN_DAILY_BUDGET_ERROR
		'12103'	: '超出合理的日限额范围，请重新设置',		// CAMPAIGN_DAILY_BUDGET_OUT_OF_RANGE
		'12104'	: '匀速投放参数结构错误',		// CAMPAIGN_DELIVERY_STRATEGY_STRUCT_ERROR
		'12105'	: '请输入20字以内的推广计划名称，请修改',		// CAMPAIGN_NAME_LENGHT_OUT_OF_LIMIT
		'12106'	: '推广计划名称包含非法字符，请修改',		// CAMPAIGN_NAME_HAS_INVALIDATE_CHARACTER
		'12107'	: '不允许的推广对象类型，请修改',		// CAMPAIGN_PROMOTION_TYPE_DENY
		'12108'	: '错误的推广计划状态，请修改',		// CAMPAIGN_STATUS_DENY
		'12109'	: '推广计划日限额格式错误，请修改',		// CAMPAIGN_DAILY_BUDGET_TYPE_ERROR
		'12200'	: '不存在此推广计划',		// CAMPAIGN_NOT_FOUND
		'13001'	: '推广组名称已经存在，请修改',		// ADGROUP_NAME_EXISTS
		'13002'	: '推广组创建失败',		// ADGROUP_CREATE_FAILED
		'13003'	: '推广组修改失败，请稍后再试',		// ADGROUP_UPDATE_FAILED
		'13100'	: '推广组内容填写有误',		// ADGROUP_FIELD_ERROR
		'13101'	: '出价错误，请修改',		// ADGROUP_BID_ERROR
		'13102'	: '出价超出合理范围，请修改',		// ADGROUP_BID_OUT_OF_RANGE
		'13103'	: '流量站点结构错误',		// ADGROUP_SITE_DOMAINS_STRUCT_ERROR
		'13104'	: '流量分类错误，请修改',		// ADGROUP_MEDIA_CATEGORIES_ERROR
		'13105'	: '曝光时段结构错误',		// ADGROUP_TIME_SET_STRUCT_ERROR
		'13106'	: '出价超出合理范围，请修改',		// ADGROUP_CPC_BID_OUT_OF_RANGE
		'13107'	: '出价超出合理范围，请修改',		// ADGROUP_CPM_BID_OUT_OF_RANGE
		'13108'	: '出价类型错误',		// ADGROUP_BID_TYPE_ERROR
		'13109'	: '非法的流量分类ID',		// ADGROUP_MEDIA_CATEGORY_ID_OUT_OF_RANGE
		'13110'	: '推广组名称文字过多，请修改',		// ADGROUP_NAME_LENGHT_OUT_OF_LIMIT
		'13111'	: '推广组名称含有非法字符，请修改',		// ADGROUP_NAME_HAS_INVALIDATE_CHARACTER
		'13112'	: '推广组状态错误',		// ADGROUP_STATUS_ERROR
		'13113'	: '投放开始时间错误，请修改',		// ADGROUP_BEGIN_TIME_ERROR
		'13114'	: '投放结束时间错误，请修改',		// ADGROUP_END_TIME_ERROR
		'13115'	: '投放时间错误，请修改',		// ADGROUP_BEGIN_GREAT_THAN_END_TIME_ERROR
		'13116'	: '推广对象ID非法',		// ADGROUP_PROMOTION_OBJECT_ID_VALUE_ERROR
		'13200'	: '不存在此推广组',		// ADGROUP_NOT_FOUND
		'14001'	: '推广组名称已经存在，请修改',		// TARGETING_NAME_EXISTS
		'14002'	: '定向创建失败，请稍后再试',		// TARGETING_CREATE_FAILED
		'14003'	: '定向修改失败，请稍后再试',		// TARGETING_UPDATE_FAILED
		'14100'	: '定向内容填写有误，请稍后再试',		// TARGETING_FIELD_ERROR
		'14101'	: '自定义人群参数错误，请稍后再试',		// TARGETING_TAG_STRUCT_ERROR
		'14102'	: '自定义人群参数错误，请稍后再试',		// TARGETING_TAG_STRUCT_MUST_BE_AN_ARRAY
		'14103'	: '自定义人群参数错误，请稍后再试',		// TARGETING_TAG_STRUCT_MUST_BE_AN_INT_ARRAY
		'14104'	: '地域定向参数错误，请稍后再试',		// TARGETING_AREA_STRUCT_ERROR
		'14105'	: '地域定向参数错误，请稍后再试',		// TARGETING_AREA_STRUCT_MUST_BE_AN_ARRAY
		'14106'	: '地域定向参数错误，请稍后再试',		// TARGETING_AREA_STRUCT_MUST_BE_AN_INT_ARRAY
		'14107'	: '联网方式定向参数错误，请稍后再试',		// TARGETING_CONNECTION_TYPE_STRUCT_ERROR
		'14108'	: '联网方式定向参数错误，请稍后再试',		// TARGETING_CONNECTION_TYPE_ID_MUST_BE_AN_ARRAY
		'14109'	: '联网方式定向参数错误，请稍后再试',		// TARGETING_CONNECTION_TYPE_ID_OUT_OF_RANGE
		'14110'	: '年龄定向参数错误，请稍后再试',		// TARGETING_AGE_STRUCT_ERROR
		'14111'	: '年龄定向参数错误，请稍后再试',		// TARGETING_AGE_STRUCT_MUST_BE_AN_ARRAY
		'14112'	: '年龄定向参数错误，请稍后再试',		// TARGETING_AGE_STRUCT_OUT_OF_RANGE
		'14113'	: '性别定向参数错误，请稍后再试',		// TARGETING_GENDER_STRUCT_ERROR
		'14114'	: '性别定向参数错误，请稍后再试',		// TARGETING_GENDER_STRUCT_MUST_BE_AN_ARRAY
		'14115'	: '性别定向参数错误，请稍后再试',		// TARGETING_GENDER_STRUCT_OUT_OF_RANGE
		'14116'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_CATEGORY_STRUCT_ERROR
		'14117'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_CATEGORY_ID_MUST_BE_AN_ARRAY
		'14118'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_ITUNES_IDS_STRUCT_ERROR
		'14119'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_ITUNES_IDS_MUST_BE_AN_ARRAY
		'14120'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_TERM_ID_MUST_BE_SET
		'14121'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_TERM_ID_OUT_OF_RANGE
		'14122'	: '兴趣爱好定向参数错误，请稍后再试',		// TARGETING_BUSINESS_INTEREST_CATEGORY_STRUCT_ERROR
		'14123'	: '兴趣爱好定向参数错误，请稍后再试',		// TARGETING_BUSINESS_INTEREST_CATEGORY_ID_MUST_BE_AN_ARRAY
		'14124'	: '兴趣爱好定向参数错误，请稍后再试',		// TARGETING_BUSINESS_INTEREST_CATEGORY_ID_OUT_OF_RANGE
		'14125'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_ITUNES_IDS_VALUE_ERROR
		'14126'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_CATEGORY_ID_VALUE_ERROR
		'14127'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_PACKAGE_NAMES_STRUCT_ERROR
		'14128'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_PACKAGE_NAMES_MUST_BE_AN_ARRAY
		'14129'	: 'APP兴趣定向参数错误，请稍后再试',		// TARGETING_APP_BEHAVIOUR_PACKAGE_NAMES_VALUE_ERROR
		'14200'	: '不存在此定向',		// TARGETING_NOT_FOUND
		'15001'	: '创意名称已经存在，请修改',		// CREATIVE_NAME_EXISTS
		'15002'	: '创意创建失败，请稍后再试',		// CREATIVE_CREATE_FAILED
		'15003'	: '创意修改失败，请稍后再试',		// CREATIVE_UPDATE_FAILED
		'15100'	: '创意内容填写有误',		// CREATIVE_FIELD_ERROR
		'15101'	: '至少需要一个创意',		// CREATIVE_MUST_HAVE_ONE
		'15102'	: '创意参数结构错误',		// CREATIVE_CONTENT_STRUCT_NOT_MATCH
		'15200'	: '不存在此创意',		// CREATIVE_NOT_FOUND
		'16001'	: '资源名称已经存在，请修改',		// ASSET_NAME_EXISTS
		'16002'	: '资源创建失败，请稍后再试',		// ASSET_CREATE_FAILED
		'16100'	: '资源参数结构错误',		// ASSET_FIELD_ERROR
		'16101'	: '上传文件请求结构错误，请稍后再试',		// ASSET_FILE_UPLOAD_REQUEST_ERROR
		'16102'	: '上传文件过大',		// ASSET_FILE_SIZE_OUT_OF_LIMIT
		'16103'	: '不允许的文件类型',		// ASSET_FILE_TYPE_DENY
		'16104'	: '超出合理的播放时长',		// ASSET_FILE_DURATION_OUT_OF_LIMIT
		'16105'	: '系统错误，请稍后再试',		// ASSET_FILE_FORMAT_TO_TYPE_MAP_NOT_DEFINE
		'16106'	: '文件名称含有非法字符',		// ASSET_FILE_NAME_HAS_INVALIDATE_CHARACTER
		'16107'	: '资源类型错误',		// ASSET_TYPE_ERROR
		'16200'	: '不存在此资源',		// ASSET_NOT_FOUND
		'16201'	: '不支持此尺寸',		// ASSET_CREATIVE_SIZE_NOT_FOUND
		'17001'	: '推广目标名称已经存在，请修改',		// PROMOTION_OBJECT_NAME_EXISTS
		'17002'	: '推广目标创建失败，请稍后再试',		// PROMOTION_OBJECT_CREATE_FAILED
		'17003'	: '推广目标修改失败，请稍后再试',		// PROMOTION_OBJECT_UPDATE_FAILED
		'17100'	: '推广目标参数结构错误，请稍后再试',		// PROMOTION_OBJECT_FIELD_ERROR
		'17101'	: '推广对象ID为空',		// PROMOTION_OBJECT_ID_EMPTY
		'17102'	: '请输入20字以内的推广对象名称',		// PROMOTION_OBJECT_NAME_LENGHT_OUT_OF_LIMIT
		'17103'	: '推广对象含有非法字符',		// PROMOTION_OBJECT_NAME_HAS_INVALIDATE_CHARACTER
		'17104'	: '推广对象类型异常',		// PROMOTION_OBJECT_TYPE_DENY
		'17105'	: '请输入推广对象URL',		// PROMOTION_OBJECT_URL_LENGHT_OUT_OF_LIMIT
		'17106'	: '推广对象URL异常',		// PROMOTION_OBJECT_URL_INVALIDATE
		'17107'	: '请输入推广对象域名',		// PROMOTION_OBJECT_DOMAIN_LENGHT_OUT_OF_LIMIT
		'17108'	: '推广对象支持平台异常',		// PROMOTION_OBJECT_SUPPORT_PLATFORM_DENY
		'17109'	: '推广对象信息错误',		// PROMOTION_OBJECT_INFO_EROR
		'17200'	: '不存在此推广目标',		// PROMOTION_OBJECT_NOT_FOUND
		'18001'	: '广告主ID已存在',		// ADVERTISER_APPROVAL_ADVERTISER_ID_EIXIST
		'18002'	: '广告主创建失败，请稍后再试',		// ADVERTISER_APPROVAL_CREATE_FAILED
		'18003'	: '广告主修改失败，请稍后再试',		// ADVERTISER_APPROVAL_UPDATE_FAILED
		'18100'	: '广告主参数错误',		// ADVERTISER_APPROVAL_FIELD_ERROR
		'18101'	: '广告主ID为空',		// ADVERTISER_APPROVAL_ADVERTISER_ID_EMPTY
		'18200'	: '不存在此广告主',		// ADVERTISER_APPROVAL_NOT_FOUND
		'19001'	: '创意已存在',		// CREATIVE_OPERATION_CREATIVE_ID_EXISTS
		'19002'	: '创意创建失败，请稍后再试',		// CREATIVE_OPERATION_CREATE_FAILED
		'19003'	: '创意修改失败，请稍后再试',		// CREATIVE_OPERATION_UPDATE_FAILED
		'19100'	: '创意参数结构错误',		// CREATIVE_OPERATION_FIELD_ERROR
		'19101'	: '创意ID为空',		// CREATIVE_OPERATION_CREATIVE_ID_EMPTY
		'19200'	: '不存在此创意',		// CREATIVE_OPERATION_NOT_FOUND
		'20001'	: '创意已存在',		// CREATIVE_APPROVAL_CREATIVE_ID_EXIST
		'20002'	: '创意创建失败，请稍后再试',		// CREATIVE_APPROVAL_CREATE_FAILED
		'20003'	: '创意修改失败，请稍后再试',		// CREATIVE_APPROVAL_UPDATE_FAILED
		'20004'	: '创意参数结构错误',		// CREATIVE_APPROVAL_FIELD_ERROR
		'20005'	: '创意ID为空',		// CREATIVE_APPROVAL_CREATIVE_ID_EMPTY
		'20006'	: '不存在此创意',		// CREATIVE_APPROVAL_NOT_FOUND
		'21001'	: '此邮箱已注册，请更换或尝试登录',		// USER_EMAIL_HAS_BEEN_REGISTERED
		'21002'	: '用户密码传输错误，请重试',		// USER_PASSORD_DECODE_ERROR
		'21003'	: '用户名或密码错误',		// USER_EMIAL_NOT_EXIST
		'21004'	: '用户名或密码错误',		// USER_PASSORD_ERROR
		'21005'	: '登录状态失效，请重新登录……',		// USER_LOGIN_STATE_EXPIRE
		'21006'	: '登录状态失效，请重新登录……',		// USER_LOGIN_STATE_INVALID
		'21007'	: '用户名或密码错误',		// USER_NOT_REGISTER
		'21008'	: '用户创建失败，请稍后再试',		// USER_CREATE_FAILED
		'21009'	: '用户创建失败，请稍后再试',		// USER_UPDATE_FAILED
		'21010'	: '用户ID为空',		// USER_ID_EMPTY
		'21011'	: '不存在此用户',		// USER_NOT_FOUND
		'21012'	: '用户参数错误，请稍后再试',		// USER_FIELD_ERROR
		'21013'	: '用户登录的账号未通过审核',		// USER_LOGIN_APPROVAL_STATUS_NOT_NORMAL
		'22001'	: '此用户已注册，请修改或尝试登录',		// USER_ACCOUNT_RELATION_HAS_BEEN_EXISTS
		'22002'	: '用户参数错误，请稍后再试',		// USER_ACCOUNT_RELATION_FIELD_ERROR
		'22003'	: '用户创建失败，请稍后再试',		// USER_ACCOUNT_RELATION_CREATE_FAILED
		'22004'	: '用户修改失败，请稍后再试',		// USER_ACCOUNT_RELATION_UPDATE_FAILED
		'22005'	: '用户ID为空',		// USER_ACCOUNT_RELATION_USER_ID_EMPTY
		'22006'	: '不存在此用户',		// USER_ACCOUNT_RELATION_NOT_FOUND
		'23001'	: '此用户已注册，请修改或尝试登录',		// USER_OPERATION_USER_ID_HAS_BEEN_EXISTS
		'23002'	: '用户参数错误，请稍后再试',		// USER_OPERATION_FIELD_ERROR
		'23003'	: '用户创建失败，请稍后再试',		// USER_OPERATION_CREATE_FAILED
		'23004'	: '用户修改失败，请稍后再试',		// USER_OPERATION_UPDATE_FAILED
		'24001'	: '此用户已注册，请修改或尝试登录',		// ACCOUNT_ID_HAS_BEEN_EXISTS
		'24002'	: '用户参数错误，请稍后再试',		// ACCOUNT_FIELD_ERROR
		'24003'	: '用户创建失败，请稍后再试',		// ACCOUNT_CREATE_FAILED
		'24004'	: '用户修改失败，请稍后再试',		// ACCOUNT_UPDATE_FAILED
		'24005'	: '账户ID为空',		// ACCOUNT_ID_EMPTY
		'24006'	: '不存在此用户',		// ACCOUNT_NOT_FOUND
		'25001'	: '发布商名称已存在',		// PUBLISHER_OBJECT_NAME_EXISTS
		'25002'	: '发布商创建失败',		// PUBLISHER_OBJECT_CREATE_FAILED
		'25003'	: '发布商修改失败',		// PUBLISHER_OBJECT_UPDATE_FAILED
		'25100'	: '参数错误',		// PUBLISHER_OBJECT_FIELD_ERROR
		'25101'	: '发布商ID为空',		// PUBLISHER_OBJECT_ID_EMPTY
		'25200'	: '不存在此发布商',		// PUBLISHER_OBJECT_NOT_FOUND
		'26001'	: '广告位名称已存在',		// PUBLISHER_PLACEMENT_NAME_EXISTS
		'26002'	: '广告位创建失败',		// PUBLISHER_PLACEMENT_CREATE_FAILED
		'26003'	: '广告位修改失败',		// PUBLISHER_PLACEMENT_UPDATE_FAILED
		'26100'	: '参数错误',		// PUBLISHER_PLACEMENT_FIELD_ERROR
		'26101'	: '广告位ID为空',		// PUBLISHER_PLACEMENT_ID_EMPTY
		'26200'	: '不存在此广告位',		// PUBLISHER_PLACEMENT_NOT_FOUND
		'27001'	: '创意规格名称已存在',		// CREATIVE_SIZE_NAME_EXISTS
		'27002'	: '创意规格创建失败',		// CREATIVE_SIZE_CREATE_FAILED
		'27003'	: '创意规格修改失败',		// CREATIVE_SIZE_UPDATE_FAILED
		'27100'	: '参数错误',		// CREATIVE_SIZE_FIELD_ERROR
		'27101'	: '创意规格ID为空',		// CREATIVE_SIZE_ID_EMPTY
		'27200'	: '不存在此创意',		// CREATIVE_SIZE_NOT_FOUND
		'28001'	: '创意ID已存在',		// CREATIVE_BRANCH_APPROVAL_CREATIVE_ID_HAS_EXISTS
		'28100'	: '参数错误',		// CREATIVE_BRANCH_APPROVAL_FIELD_ERROR
		'28101'	: '创意审核记录创建失败',		// CREATIVE_BRANCH_APPROVAL_CREATE_FAILED
		'28102'	: '创意ID为空',		// CREATIVE_BRANCH_APPROVAL_CREATIVE_ID_EMPTY
		'28103'	: '不存在此审核创意',		// CREATIVE_BRANCH_APPROVAL_NOT_FOUND
		'29101'	: '已存在此广告主',		// ADVERTISER_ADX_APPROVAL_ADVERTISER_ID_EXISTS
		'29102'	: '广告主参数错误',		// ADVERTISER_ADX_APPROVAL_FIELD_ERROR
		'29103'	: '广告主创建失败',		// ADVERTISER_ADX_APPROVAL_CREATE_FAILED
		'29104'	: '广告主ID为空',		// ADVERTISER_ADX_APPROVAL_ADVERTISER_ID_EMPTY
		'29105'	: '不存在此广告主',		// ADVERTISER_ADX_APPROVAL_NOT_FOUND
		'29106'	: '广告主修改失败',		// ADVERTISER_ADX_APPROVAL_UPDATE_FAILED
		'30000'	: '用户登陆日志ID已经被使用',		// USER_LOGIN_LOG_ID_HAS_BEEN_USED
		'30001'	: '用户登陆日志字段错误',		// USER_LOGIN_LOG_FIELD_ERROR
		'30002'	: '用户登陆日志创建失败',		// USER_LOGIN_LOG_CREATE_FAILED
		'30003'	: '用户登陆日志ID不能为空',		// USER_LOGIN_LOG_ID_EMPTY
		'30004'	: '用户登陆日志记录为空',		// USER_LOGIN_LOG_IS_EMPTY
		'31000'	: '参数错误',		// CRITICAL_DATA_SCHEME_FIELD_ERROR
		'31001'	: '已存在此统计视图',		// CRITICAL_DATA_SCHEME_EXISTS
		'31002'	: '创建失败',		// CRITICAL_DATA_SCHEME_CREATE_FAILED
		'31003'	: '统计视图修改失败',		// CRITICAL_DATA_SCHEME_UPDATE_FAILED
		'31004'	: '数据统计ID不能为空',		// CRITICAL_DATA_SCHEME_ID_EMPTY
		'31005'	: '不存在此统计视图',		// CRITICAL_DATA_SCHEME_NOT_FOUND
		'31006'	: '非法的JSON数据',		// CRITICAL_DATA_SCHEME_INVALID_JSON
		'32001'	: '广告主审核记录创建失败',		// ADVERTISER_BRANCH_APPROVAL_CREATE_FIALED
		'32002'	: '广告主审核记录更新失败',		// ADVERTISER_BRANCH_APPROVAL_UPDATE_FIALED
		'32003'	: '广告主审核记录不存在',		// ADVERTISER_BRANCH_APPROVAL_NOT_FOUND
		'40001'	: '号码包记录不存在',		// NUMBER_PACKAGE_NOT_FOUND
		'40002'	: '号码包文件格式错误',		// NUMBER_PACKAGE_FILE_TYPE_ERROR
		'40003'	: '号码包不允许大于100M',		// NUMBER_PACKAGE_FILESIZE_OUT_OF_RANGE
		'40004'	: '号码包上传错误',		// NUMBER_PACKAGE_UPLOAD_ERROR
		'41000'	: 'sms 字段错误',		// SMS_FIELD_ERROR
		'41001'	: 'sms 记录不存在',		// SMS_NOT_FOUND
		'41002'	: 'sms 已存在',		// SMS_EXISTS
		'41003'	: 'sms id不能为空',		// SMS_ID_EMPTY
		'41004'	: 'sms 创建失败',		// SMS_CREATE_ERROR
		'41005'	: 'sms 更新失败'		// SMS_UPDATE_ERROR
}
